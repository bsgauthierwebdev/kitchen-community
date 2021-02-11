import React from 'react';
import {Link} from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

export default class RecipeListMain extends React.Component {
    render() {
        return (
            <section className = 'RecipeListMain'>
                <ul>
                    <li>This list</li>
                    <li>will be popluated</li>
                    <li>by the recipes</li>
                    <li>submitted by users.</li>
                    <li>Each item in this list</li>
                    <li>will be a link</li>
                    <li>to the individual recipe page.</li>
                </ul>
            </section>
        )
    }
}