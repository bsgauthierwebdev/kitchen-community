import React, {Compoment} from 'react';
import RecipeError from '../RecipeError';
import ValidationError from '../ValidationError';
import ApiContext from '../ApiContext';
import './AddComment.css';
import moment from 'moment';
import { render } from '@testing-library/react';

class AddComment extends Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props) {
            this.state = {
                name: {
                    value: "",
                    touched: false
                },
                modified: "",
                content: {
                    value: "",
                    touched: false
                },
                recipeId: {
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

        updateContent(content, modified) {
            this.setState({content: {value: content, touched: true}})
            this.updateModified(modified);
        }

        updateRecipeId = (recipe) => {
            this.setState({recipeId: {value: recipe, touched: true}});
        }

        handleSubmit(e) {
            e.preventDefault();
            const comment = {
                name: this.state.name.value,
                modified: this.state.modified,
                content: this.state.content.value,
                recipeId: this.state.recipeId.value
            }
                this.context.addComment(comment)
                this.props.history.push('/')
        }

        timeStamp() {
            moment().toDate()
        }

        validateName() {
            const name = this.state.name.value.trim();
            if (name.length === 0) {
                return 'Name is required';
            }
            else if (name.length < 3) {
                return 'Name must be at least three characters'
            }
        }

        validateContent() {
            const content = this.state.content.value.trim();
            if (content.length === 0) {
                return 'Content is required for comment creation'
            }
        }

        validateRecipeId() {
            const recipeOption = this.state.recipeId.value;
            if (recipeOption === null) {
                return 'Picking a recipe is required'
            }
        }

        handleClickCancel = () => {
            this.props.history.push('/')
        };

        render() {
            const nameError = this.validateName();
            const contentError = this.validateContent();
            const recipeIdError = this.validateRecipeId();
            const modified = moment().toDate();

            return
        }
    }
}