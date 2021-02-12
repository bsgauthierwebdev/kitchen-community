import React from 'react';

export default function AddRecipe() {
    return (
        <div className = 'addRecipe'>
            <h2>Add Your Recipes and Kitchen Tips Here</h2>
            <form id = 'addRecipe__input'>
                <section className = 'addRecipe__title'>
                    <label htmlFor = 'addRecipe__title-input'>Title</label>
                    <input 
                        type = 'text'
                        name = 'name'
                        id = 'name'
                        placeholder = 'Macaroni and Cheese'
                        required />
                </section>
                <section className = 'addRecipe__prep-time'>
                    <label htmlFor = 'addRecipe__prep-time-input'>Prep Time</label>
                    <input
                        type = 'text'
                        name = 'name'
                        id = 'name'
                        placeholder = '30 minutes'
                        required />
                </section>
                <section className = 'addRecipe__cook-time'>
                    <label htmlFor = 'addRecipe__cook-time-input'>Cook Time</label>
                    <input
                        type = 'text'
                        name = 'name'
                        id = 'name'
                        placeholder = '1 hour'
                        required />
                </section>
                <section className = 'addRecipe__servings'>
                    <label htmlFor = 'addRecipe__servings-input'>Servings</label>
                    <input
                        type = 'text'
                        name = 'name'
                        id = 'name'
                        placeholder = '4'
                        required />
                </section>
                <section className = 'addRecipe__ingredients'>
                    <label htmlFor = 'addRecipe__ingredients'>
                        Ingredients and/or Equipment
                    </label>
                    <textarea 
                        name = 'addRecipe__equipment' 
                        rows = '10'
                        placeholder = 'add your ingredients and equipment here'
                        required 
                    />
                </section>
                <section className = 'addRecipe-directions'>
                    <label htmlFor = 'addRecipe__directions-input'>Directions</label>
                    <textarea
                        name = 'addRecipe__instructions'
                        rows = '20'
                        placeholder = 'add your directions here'
                        required
                    />
                </section>
                <section className = 'addRecipe__type'>
                    <label htmlFor = 'addRecipe__type-input'>Submission Type:</label>
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
                </section>
            </form>
            <button type = 'submit'>Submit</button>
            <button type = 'reset'>Reset</button>
        </div>
    )
}

