import React from 'react';
import {Redirect, Link} from 'react-router-dom';

export default class Recipe extends React.Component {
    render() {
        return (
            <div className = 'Recipe'>
                <h2 className = 'Recipe__title'>Recipe Title</h2>
                <p>Ingredients and Equipment are listed here</p>
                <p>Directions are listed here</p>
            </div>
        )
    }
}