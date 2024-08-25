import "./App.css";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RecipePage = ({ match }) => {
  const { id } = match.params;
  return <RecipeDetails recipeId={id} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}
const HomePage = () => (
  <>
    <RecipeList />
    <AddRecipeForm />
  </>
);

export default App;
