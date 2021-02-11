import React from 'react';
import {NavLink, Link} from 'react-router-dom';

export default class FolderListMain extends React.Component {
    render() {
        return (
            <div className = 'FolderListMain'>
                <ul className = 'FolderListMain__list'>
                    <li>Asian</li>
                    <li>BBQ</li>
                    <li>Comfort Food</li>
                    <li>Italian</li>
                    <li>Kitchen Hacks and Hints</li>
                    <li>Mediterranean</li>
                    <li>Seafood</li>
                    <li>Vegetarian / Vegan</li>
                </ul>
            </div>
        )
    }
}