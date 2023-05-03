import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {

    const [favorite, setFavorite] = useState(false);


    // console.log(recipe);
    const { recipeName, recipeImg, ingredients, cookingMethod, rating } = recipe ? recipe : {};


    // toast add
    const handleFavoriteClick = () => {
        setFavorite(true);
        toast("Successfully added recipe in favorite list!", {
            duration: 2000,

        });

    };
    return (
        <div className='mt-6 pt-4 '>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={recipeImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipeName}</h2>
                    <p>Ingredients</p>
                    <ul className=" list-decimal list-inside">
                        {ingredients.map(ingredient => (
                            <li className="my-2 text-md font-semibold">
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                    <p className='text-xl'>Cooking Method: <span>{cookingMethod}</span></p>
                    <p>Rating : {rating}</p>
                    <div className="card-actions justify-start">
                        <button
                            disabled={favorite}
                            onClick={handleFavoriteClick}
                            className="btn btn-primary hover:bg-blue-800">
                            {/* Add To Favorite */}
                            {favorite ? "Favorited" : "Add to Favorite"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;