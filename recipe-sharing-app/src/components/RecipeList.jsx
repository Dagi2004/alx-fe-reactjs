import { Link } from "react-router-dom";
import useRecipeStore from "../components/recipeStore";
import DeleteRecipeButton from "../components/DeleteRecipeButton";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            <div>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <DeleteRecipeButton recipeId={recipe.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
