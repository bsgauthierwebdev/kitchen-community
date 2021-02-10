import React from 'react';

export default function AddRecipe() {
    return (
        <div className = 'addRecipe'>
            <h2>Add your recipes and kitchen tips here</h2>
            <div className = 'addRecipe__input'>* fields are required</div>
            <div>
                <input
                    type = 'text'
                    className = 'addRecipe__title'
                    name = 'name'
                    id = 'name'
                    required />
            </div>
        </div>
    )
}