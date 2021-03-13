import React from 'react';
import {Redirect} from 'react-router-dom';
import {format} from 'date-fns';
import ApiContext from '../ApiContext';
import config from '../config';

export default class Comment extends React.Component {
    static defaultProps = {
        onDeleteComment: () => {},
        history: {
            push: () => {}
        },
    }
    static contextType = ApiContext;

    handleClickDelete = (e) => {
        e.preventDefault()
        const recipeId = this.props.id
        const commentId = this.props.id
        console.log(commentId)

        fetch(`${config.API_ENDPOINT}/api/recipes/${recipeId}/${commentId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(() => {
                console.log(`Deleting the comment`)
                this.props.history.push('/recipes/:recipeId/comments')
                this.context.deleteComment(commentId)
            })
            .catch(error => {
                console.error({error})
            })
    }

    render() {
        const {content, id, modified} = this.props
        if (!this.props.id) {
            return <Redirect to = '/recipes/:recipeId' />
        }
        return (
            <div className = 'Comment'>
                <div className = 'Comment__content'>
                    {content}
                </div>
                <div className = 'Comment__modified'>
                    Modified
                    {' '}
                    <span className = 'Comment__modified-date'>
                        {format(new Date(modified), 'MMM dd, yyyy')}
                    </span>
                </div>
                <button
                    className = 'Comment__delete'
                    type = 'button'
                    onClick = {this.handleClickDelete}
                >
                    Delete
                </button>
            </div>
        )
    }
}