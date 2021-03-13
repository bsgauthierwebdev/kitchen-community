import React from 'react';
import {Link} from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import Comment from '../Comment/Comment';
import ApiContext from '../ApiContext';
import {getCommentsForRecipe} from '../recipes-helpers';

export default class CommentsList extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }
    static contextType = ApiContext
    
    render() {
        const {recipeId} = this.props.match.params
        const {comments = []} = this.context
        const commentsForRecipe = getCommentsForRecipe(comments, recipeId)

        return (
            <section className = 'Comments'>
                <div className = 'Comments__display'>
                <ul>
                    {commentsForRecipe.map(comment =>
                        <li key = {comment.id}>
                            <Comment
                                id = {comment.id}
                                content = {comment.content}
                                modified = {comment.modified}
                            />
                        </li>
                    )}
                </ul>
                </div>
                <div className = 'Comments__add-button'>
                    <Link to = '/add-comment'>
                    <button
                        type = 'button'
                        className = 'Comments__add-comment-button'>
                            Add Comment
                        </button>
                    </Link>
                </div>
            </section>
        )
    }
}