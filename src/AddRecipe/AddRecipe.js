import React from 'react';

export default function AddRecipe() {
    return (
        <div className = 'addRecipe'>
            <h2>Add Your Recipes and Kitchen Tips Here</h2>
            <form id = 'addRecipe__input'>
                <label htmlFor = 'addRecipe__title'>Title</label>
                <input 
                    type = 'text'
                    name = 'name'
                    id = 'name'
                    placeholder = 'Macaroni and Cheese'
                    required />
                <label htmlFor = 'addRecipe__ingredients'>
                    Ingredients and/or Equipment
                </label>
                <textarea 
                    name = 'addRecipe__equipment' 
                    rows = '10'
                    placeholder = 'add your ingredients and equipment here'
                    required 
                />
                <label htmlFor = 'addRecipe__directions'>Directions</label>
                <textarea
                    name = 'addRecipe__instructions'
                    rows = '20'
                    placeholder = 'add your directions here'
                    required
                />
                <label htmlFor = 'addRecipe__type'>Submission Type:</label>
                <select name = 'addRecipe__folder' required>
                    <option value = '' selected = 'selected'>Choose a Category</option>
                    <option value = 'asian'>Asian</option>
                    <option value = 'bbq'>BBQ</option>
                    <option value = 'comfort-food'>Comfort Food</option>
                    <option value = 'italian'>Italian</option>
                    <option value = 'hacks-and-hints'>Kitchen Hacks and Hints</option>
                    <option value = 'mediterranean'>Mediterranean</option>
                    <option value = 'seafood'>Seafood</option>
                    <option value = 'vegetarian-and-vegan'>Vegetarian / Vegan</option>
                </select>
            </form>
            <button type = 'submit'>Submit</button>
            <button type = 'reset'>Reset</button>
        </div>
    )
}

