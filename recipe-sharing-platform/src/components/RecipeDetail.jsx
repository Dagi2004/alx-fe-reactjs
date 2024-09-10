import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const fetchRecipe = async (id) => {
  const response = await fetch("/data.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.find((r) => r.id === parseInt(id, 10));
};

const RecipeDetail = () => {
  const { id } = useParams();
  const {
    data: recipe,
    error,
    isLoading,
  } = useQuery(["fetchRecipe", id], () => fetchRecipe(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mt-2 mb-4 text-center">
        {recipe.title}
      </h2>

      <div className="flex flex-col items-center max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.imageURL}
          alt={recipe.title}
          className="h-56 w-full object-cover"
        />

        <div className="flex flex-col md:flex-row w-full">
          <div className="p-4 md:w-1/2 border-r">
            <h2 className="text-2xl font-semibold mb-2 text-red-600">
              Ingredients
            </h2>
            <ul className="list-disc pl-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="p-4 md:w-1/2  bg-gray-600 text-white">
            <h2 className="text-2xl font-semibold mb-2 text-red-600">
              Cooking Steps
            </h2>
            <ol className="list-decimal pl-5 ">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
