import useRecipeStore from "../components/recipeStore";
import { useNavigate } from "react-router-dom";
const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const handleDelete = () => {
    deleteRecipe(recipeId)
      .then(() => {
        navigate("/recipes"); // Adjust the path as needed
      })
      .catch((error) => {
        console.error("Error deleting recipe:", error);
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
