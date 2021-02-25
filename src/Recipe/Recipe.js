import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import {format} from 'date-fns';
import ApiContext from '../ApiContext';
import config from '../config';
import PropTypes from 'prop-types';

export default class Recipe extends React.Component {
    static defaultProps = {
        onDeleteRecipe: () => {},
        history: {
            push: () => {}
        },
    }
    static contextType = ApiContext;

    handleClickDelete = (e) => {
        e.preventDefault()
        const recipeId = this.props.id
        console.log(recipeId)

        fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(() => {
                console.log(`Deleting the recipe`)
                this.props.history.push('/recipes')
                this.context.deleteRecipe(recipeId)
            })
            .catch(error => {
                console.error({error})
            })
    }
    
    render() {
        const {name, id, modified} = this.props
        if (!this.props.id) {
            return <Redirect to = '/' />
        }
        return (
            <div className = 'Recipe'>
                <h2 className = 'Recipe__title'>
                    <Link to = {`/recipes/${id}`}>
                        {name}
                    </Link>
                </h2>
                <button
                    className = 'Recipe__delete'
                    type = 'button'
                    onClick = {this.handleClickDelete}
                >
                    Delete
                </button>
                <div className = 'Recipe__dates'>
                    <div className = 'Recipe__dates-modified'>
                        Modified
                        {' '}
                        <span className = 'Date'>
                            {format(new Date(modified), 'MMM dd,yyyy')}
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

// Recipe.defaultProps = {
//     folders: [],
//     content: "",
//     name: "",
//     error: null
//   }
  
//   Recipe.propTypes = {
//     folders: PropTypes.array,
//     name: PropTypes.string.isRequired,
//     id: PropTypes.string,
//     content: PropTypes.string.isRequired,
//     modified: PropTypes.string
//   }