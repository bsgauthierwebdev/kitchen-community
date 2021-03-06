import React, {Component} from 'react';
import RecipeError from '../RecipeError';
import ValidationError from '../ValidationError';
import ApiContext from '../ApiContext';
import FolderOptions from '../FolderOptions';
import moment from 'moment';
import './AddRecipe.css';

class AddRecipe extends Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
                touched: false
            },
            modified: "",
            description: {
                value: "",
                touched: false
            },
            prepTime: {
                value: "",
                touched: false
            },
            cookTime: {
                value: "",
                touched: false
            },
            servings: {
                value: "",
                touched: false
            },
            ingredients: {
                value: "",
                touched: false
            },
            directions: {
                value: "",
                touched: false
            },
            folderId: {
                value: "",
                touched: false
            }
        };
    }

    updateName(name, modified) {
        this.setState({name: {value: name, touched: true}});
        this.updateModified(modified);
    }

    updateModified(modified) {
        this.setState({modified: modified});
    }

    updateDescription(description, modified) {
        this.setState({description: {value: description, touched: true}});
        this.updateModified(modified);
    }

    updatePrepTime(prepTime, modified) {
        this.setState({prepTime: {value: prepTime, touched: true}});
        this.updateModified(modified);
    }

    updateCookTime(cookTime, modified) {
        this.setState({cookTime: {value: cookTime, touched: true}});
        this.updateModified(modified);
    }

    updateServings(servings, modified) {
        this.setState({servings: {value: servings, touched: true}});
        this.updateModified(modified);
    }

    updateIngredients(ingredients, modified) {
        this.setState({ingredients: {value: ingredients, touched: true}});
        this.updateModified(modified);
    }

    updateDirections(directions, modified) {
        this.setState({directions: {value: directions, touched: true}});
        this.updateModified(modified);
    }

    updateFolderId = (folder) => {
        this.setState({folderId: {value: folder, touched: true}});
    }

    handleSubmit(e) {
        e.preventDefault();
        const recipe = {
            name: this.state.name.value,
            modified: this.state.modified,
            description: this.state.description.value,
            prepTime: this.state.prepTime.value,
            cookTime: this.state.cookTime.value,
            servings: this.state.servings.value,
            ingredients: this.state.ingredients.value,
            directions: this.state.directions.value,
            folderId: this.state.folderId.value
        }
            this.context.addRecipe(recipe)
            this.props.history.push('/recipes')
    }

    timeStamp() {
        moment().toDate()
    }

    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return `Name is required.`;
        }
        else if (name.length < 3) {
            return `Name must me at least three characters.`
        }
    }

    validateDescription() {
        const description = this.state.description.value.trim();
        if (description.length === 0) {
            return `Description is required to create this recipe.`
        }
    }
    
    validateIngredients() {
        const ingredients = this.state.ingredients.value.trim();
        if (ingredients.length === 0) {
            return `Please add the ingredients or supplies needed for your entry.`
        }
    }
    validateDirections() {
        const directions = this.state.directions.value.trim();
        if (directions.length === 0) {
            return `Please add the directions for your entry.`
        }
    }

    validateFolderId() {
        const folderOption = this.state.folderId.value;
        if (folderOption === null) {
            return `Please select a folder for your entry.`
        }
    }

    handleClickCancel = () => {
        this.props.history.push('/recipes')
    };

    render() {
        const nameError = this.validateName();
        const descriptionError = this.validateDescription();
        const ingredientsError = this.validateIngredients();
        const directionsError = this.validateDirections();
        const folderIdError = this.validateFolderId();
        const modified = moment().toDate();

        return (
            <>
            <form className = 'addRecipe' onSubmit = {e => this.handleSubmit(e)}>
                <RecipeError>
                    <h1>Add your recipe or kitchen idea here!</h1>
                    <div className = 'addRecipe__input'>* fields are required</div>
                    <div className = 'addRecipe__name'>
                        <label htmlFor = 'nameInput'>*Name: </label>
                        <br />
                        <input
                            type = 'text'
                            className = 'addRecipe__name-input'
                            name = 'name'
                            id = 'name'
                            placeholder = 'add a name for your entry here'
                            onChange = {e => this.updateName(e.target.value, modified)}
                            required />
                            {this.state.name.touched && (
                                <ValidationError message = {nameError} />
                            )}
                    </div>
                    <div className = 'addRecipe__description'>
                        <label htmlFor = 'descriptionInput'>*Description: </label>
                        <br />
                        <textarea
                            name = 'addRecipe__description-input'
                            rows = '5'
                            placeholder = 'add a description of your entry here'
                            onChange = {e => this.updateDescription(e.target.value, modified)}
                            required />
                            {this.state.description.touched && (
                                <ValidationError message = {descriptionError} />
                            )}
                    </div>
                    <div className = 'addRecipe__prepTime'>
                        <label htmlFor = 'prepTimeInput'>Prep Time: </label>
                        <br />
                        <input
                            type = 'text'
                            name = 'name'
                            id = 'name'
                            placeholder = '30 minutes'
                            onChange = {e => this.updatePrepTime(e.target.value, modified)} />
                    </div>
                    <div className = 'addRecipe__cookTime'>
                        <label htmlFor = 'cookTimeInput'> Cook Time: </label>
                        <br />
                        <input
                            type = 'text'
                            name = 'name'
                            id = 'name'
                            placeholder = '1 hour'
                            onChange = {e => this.updateCookTime(e.target.value, modified)} />
                    </div>
                    <div className = 'addRecipe__servings'>
                        <label htmlFor = 'servingsInput'>Servings: {" "}</label>
                        <br />
                        <input
                            type = 'number'
                            name = 'servings'
                            id = 'servings'
                            defaultValue = '0'
                            min = '0'
                            max = '30'
                            onChange = {e => this.updateServings(e.target.value, modified)} />
                    </div>
                    <div className = 'addRecipe__ingredients'>
                        <label htmlFor = 'ingredientsInput'>*Ingredients: </label>
                        <br />
                        <textarea
                            name = 'ingredients'
                            rows = '10'
                            placeholder = 'add your ingredients and/or equipment here'
                            required
                            onChange = {e => this.updateIngredients(e.target.value, modified)} />
                            {this.state.description.touched && (
                                <ValidationError message = {ingredientsError} />
                            )}
                    </div>
                    <div className = 'addRecipe__directions'>
                        <label htmlFor = 'directionsInput'>*Directions: </label>
                        <br />
                        <textarea
                            name = 'directions'
                            rows = '10'
                            placeholder = 'add your directions here'
                            required
                            onChange = {e => this.updateDirections(e.target.value, modified)} />
                            {this.state.description.touched && (
                                <ValidationError message = {directionsError} />
                            )}
                    </div>
                    <div className = 'addRecipe__folder'>
                        <label htmlFor = 'folderInput'>*Choose a Folder: </label>
                        <br />
                        <FolderOptions
                            updateFolderId = {this.updateFolderId} />
                            {this.state.folderId.touched && (
                                <ValidationError folderIdError = {folderIdError} />
                            )}
                    </div>
                    <div>
                    <button type = 'submit' className = 'addRecipe__button'>
                        Save
                    </button>
                    </div>
                    <div>
                    <button type = 'cancel' className = 'addRecipe__cancel' onClick = {this.handleClickCancel}>
                        Cancel
                    </button>
                    </div>
                </RecipeError>
            </form>
            </>
        )
    }
}

AddRecipe.defaultProps = {
    folders: [],
    content: "",
    name: "",
    error: null
}

export default AddRecipe;