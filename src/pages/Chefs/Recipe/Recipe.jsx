import React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const Recipe = ({ selectedChefRecipe }) => {
    // console.log(selectedChefRecipe);
    const { chefName, chefPicture, yearsOfExperience, chefDescription, likes, recipes } = selectedChefRecipe ? selectedChefRecipe : {};
    // console.log(chefPicture,chefName);

    return (
        <div className='px-5 py-5 mx-auto my-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>{chefDescription}</p>
                    <div>
                        <p>Likes: {likes}</p>
                        <p>Recipe: {recipes?.length}</p>
                        <p className='text-2xl '>Experience: {yearsOfExperience}Yrs  </p>
                    </div>
                    <div className="card-actions">
                        <Link to='/' className="btn btn-primary">Go Back</Link>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
                {
                    recipes?.map( recipe  => <RecipeCard recipe={recipe} ></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Recipe;