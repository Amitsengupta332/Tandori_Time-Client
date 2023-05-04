import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipeDetails = () => {
    const [chefRecipes, setChefrecipes] = useState([]);

    const { id } = useParams()
    console.log(id);


    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-amitsengupta332.vercel.app/cheflist')
            .then(res => res.json())
            .then(data =>  setChefrecipes(data))
            .catch(error => console.log(error));
    }, [])

    const selectedChefRecipe = chefRecipes.find(chefRecipe => chefRecipe.id == id)
    // console.log(selectedChefRecipe);

    return (
        <div>
             <Recipe selectedChefRecipe={selectedChefRecipe} ></Recipe>
        </div>
    );
};

export default RecipeDetails;