import React, {Component} from 'react';
import RecipeError from '../RecipeError';
import ValidationError from '../ValidationError';
import ApiContext from '../ApiContext';
import './AddComment.css';
import moment from 'moment';
import { render } from '@testing-library/react';

class AddComment extends Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
            this.state = {
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
                modified: this.state.modified,
                content: this.state.content.value,
                recipeId: this.props.match.params.recipeId
            }
                this.context.addComment(comment)
        }

        timeStamp() {
            moment().toDate()
        }

        validateContent() {
            const content = this.state.content.value.trim();
            if (content.length === 0) {
                return 'Content is required for comment creation'
            }
        }

        handleClickCancel = () => {
            let recipeId = this.props.match.params.recipeId
            this.props.history.push(`/recipes/${recipeId}`)
        };

        render() {
            const contentError = this.validateContent();
            const modified = moment().toDate();

            return (
                <>
                <form className = 'addComment' onSubmit = {e => this.handleSubmit(e)}>
                    <h2>Add your comments here</h2>
                    <div className = 'addComment__input'>
                        <label htmlFor = 'addComment__content'>Your comment:</label>
                        </div>
                        <div className = 'addComment__content-input'>
                        <textarea
                            name = 'comments'
                            rows = '10'
                            placeholder = 'add your comments here'
                            required
                            onChange = {e => this.updateContent(e.target.value, modified)} />
                            {this.state.content.touched && (
                                <ValidationError message = {contentError} />
                            )}
                    </div>
                    <div className = 'addComment__submit'>
                    <button type = 'submit' className = 'addComment__button'>
                        Save
                    </button>
                    </div>
                    <div className = 'addComment__cancel'>
                        <button type = 'button' onClick = {this.handleClickCancel}>
                        Cancel
                        </button>
                    </div>
                </form>
                </>
            )
        }
    }

export default AddComment;