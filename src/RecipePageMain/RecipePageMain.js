import React from 'react';
import Recipe from '../Recipe/Recipe';

export default class RecipePageMain extends React.Component {
    render() {
        return (
            <section className = 'RecipePageMain'>
                <ul className = 'RecipePageMain__recipes'>
                    <li>Macaroni and Cheese</li>
                    <li>Shrimp and Grits</li>
                    <li>How to Sharpen Your Kitchen Knives</li>
                    <li>Southwestern Sweet Potato Power Bowls</li>
                    <li>Proper Cast Iron Care</li>
                    <li>Chicken Parmagiana</li>
                    <li>Baby Back Ribs</li>
                </ul>
            </section>
        )
    }
}