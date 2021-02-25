import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../config';
import PropTypes from 'prop-types';
import LandingPage from '../LandingPage/LandingPage';
import AboutUs from '../AboutUs/AboutUs';
import AddRecipe from '../AddRecipe/AddRecipe';
import AddFolder from '../AddFolder/AddFolder';
import FolderListMain from '../FolderListMain/FolderListMain';
import RecipeListMain from '../RecipeListMain/RecipeListMain';
import RecipePageMain from '../RecipePageMain/RecipePageMain';
import RecipePageNav from '../RecipePageNav/RecipePageNav';

class App extends Component {
  state = {
    recipes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/recipes`),
      fetch(`${config.API_ENDPOINT}/api/folders`)
    ])
      .then(([recipesRes, foldersRes]) => {
        if (!recipesRes.ok)
          return recipesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));

        return Promise.all([recipesRes.json(), foldersRes.json()]);
      })
      .then(([recipes, folders]) => {
        this.setState({recipes, folders});
      })
      .catch(error => {
        console.error({error});
      });
  }

  handleDeleteRecipe = recipeId => {
    this.setState({
      recipes: this.state.recipes.filter(recipe => recipe.id !== recipeId)
    });
  };

  addFolder = folderName => {
    fetch(`${config.API_ENDPOINT}/api/folders`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({name: folderName})
    })
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON)
        const newFolders = [...this.state.folders, resJSON]
        console.log(newFolders)
        this.setState({folders: newFolders})
        console.log(this.state)

        this.props.history.push('/folders')
      })
      .catch(err => {
        console.log(err)
      })
  }

  addRecipe = recipeData => {
    fetch(`${config.API_ENDPOINT}/api/recipes`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeData)
    })
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON)
        const newRecipes = [...this.state.recipes, resJSON]
        console.log(newRecipes)
        this.setState({recipes: newRecipes})
        console.log(this.state)

        this.props.history.push('/recipes')
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderNavRoutes() {
    return (
        <>
          {['/', '/folders/:id'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={FolderListMain}
                    />
                ))}
            <Route path = '/recipes/:recipeId' component = {RecipePageNav} />
            <Route path = '/add-folder' component = {AddFolder} />
            <Route path = '/add-recipe' component = {AddRecipe} />
        </>
    );
}

  renderMainRoutes() {
    return (
      <>
        {['/folders/:folderId'].map(path => (
            <Route
                exact
                key={path}
                path={path}
                component={RecipeListMain}
            />
        ))}
        <Route path = '/recipes/:recipeId' component = {RecipePageMain} />
      </>
    )
  }

  render() {
    const value = {
      recipes: this.state.recipes,
      folders: this.state.folders,
      deleteRecipe: this.handleDeleteRecipe,
      addFolder: this.addFolder,
      addRecipe: this.addRecipe
    };
    return (
      <ApiContext.Provider value = {value}>
      <div className = 'App'>
        <nav className = 'App_nav'><h3>Navigation</h3></nav>
          <nav>
            <Link to = '/about-us'>About Us | </Link>
            <Link to = '/recipes'>Recipes | </Link>
            <Link to = '/folders'>Folders | </Link>
            <Link to = '/add-folder'>Add Folder | </Link>
            <Link to = '/add-recipe'>Add Recipe </Link>
          </nav>
        <main className='App_main'>
          <Route
            exact path = '/'
            component = {LandingPage}
            />
          <Route 
            path = '/about-us'
            component = {AboutUs}
            />
          <Route
              path = '/recipes'
              component = {RecipeListMain}
              />
          <Route
            path = '/folders'
            component = {FolderListMain}
            />
          <Route
            path = '/add-recipe'
            component = {AddRecipe}
            />
          <Route
            path = '/add-folder'
            component = {AddFolder}
            />
          {/* <nav className="App__nav">{this.renderNavRoutes()}</nav> */}
          <div className="App__main">{this.renderMainRoutes()}</div>

      </main>
      </div>
      </ApiContext.Provider>
    );
  }
}

App.defaultProps = {
  folders: [],
  content: "",
  name: "",
  error: null
}

App.propTypes = {
folders: PropTypes.array,
name: PropTypes.string.isRequired,
id: PropTypes.string,
content: PropTypes.string.isRequired,
modified: PropTypes.string
}

export default App;