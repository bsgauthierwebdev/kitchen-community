import React from 'react';

const ApiContext = React.createContext({
    recipes: [],
    folders: [],
    addFolder: () => {},
    addRecipe: () => {},
    deleteRecipe: () => {},
})

export default ApiContext;