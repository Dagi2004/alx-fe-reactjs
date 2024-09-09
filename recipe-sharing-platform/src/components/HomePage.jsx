import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto px-5 py-8">
      <h1 className="text-3xl font-bold mb-5 mt-5 text-center">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="overflow-hidden rounded-lg border border-gray-100 bg-white  shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={recipe.imageURL}
              alt={recipe.title}
              className="h-56 w-full object-cover"
            />
            <h2 className="text-xl font-semibold mt-2 text-center">
              {recipe.title}
            </h2>
            <p className="text-gray-600 px-4 max-wd-md text-center ">
              {recipe.summary}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
