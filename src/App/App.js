import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../config';
import LandingPage from '../LandingPage/LandingPage';
import AboutUs from '../AboutUs/AboutUs';
import AddRecipe from '../AddRecipe/AddRecipe';
import AddFolder from '../AddFolder/AddFolder';
import AddComment from '../AddComment/AddComment';
import CommentsList from '../CommentsList/CommentsList';
import FolderListMain from '../FolderListMain/FolderListMain';
import RecipeListMain from '../RecipeListMain/RecipeListMain';
import RecipePageMain from '../RecipePageMain/RecipePageMain';
import './App.css';
import { countRecipesForFolder } from '../recipes-helpers';

class App extends Component {
  state = {
    recipes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/recipes`),
      fetch(`${config.API_ENDPOINT}/api/folders`),
      fetch(`${config.API_ENDPOINT}/api/comments`),
    ])
      .then(([recipesRes, foldersRes, commentsRes]) => {
        if (!recipesRes.ok)
          return recipesRes.json().then(e => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then(e => Promise.reject(e));
        if (!commentsRes.ok)
          return commentsRes.json().then(e => Promise.reject(e));

        return Promise.all([recipesRes.json(), foldersRes.json(), commentsRes.json()]);
      })
      .then(([recipes, folders, comments]) => {
        this.setState({recipes, folders, comments});
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

  addComment = commentData => {
    fetch(`${config.API_ENDPOINT}/api/comments`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON)
        const newComments = [...this.state.comments, resJSON]
        console.log(newComments)
        this.setState({comments: newComments})
        console.log(this.state)

        this.props.history.push(`/recipes/${commentData.recipeId}/comments`)
      })
      .catch(err => {
        console.log(err)
      })
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
        <Route 
            exact path = '/recipes/:recipeId' 
            component = {RecipePageMain} />
        <Route
            exact path = '/'
            component = {LandingPage}
            />
          <Route 
            path = '/about-us'
            component = {AboutUs}
            />
          <Route
            exact path = '/recipes'
            component = {RecipeListMain}
            />
          <Route
            path = '/add-recipe'
            component = {AddRecipe}
            />
          <Route
            exact path = '/folders'
            component = {FolderListMain}
            />
          <Route
            path = '/add-folder'
            component = {AddFolder}
            />
          <Route
            path = '/recipes/:recipeId/comments'
            component = {CommentsList}
            />
          <Route 
            path = '/recipes/:recipeId/add-comment'
            component = {AddComment}
            />
      </>
    )
  }

  render() {
    const value = {
      recipes: this.state.recipes,
      folders: this.state.folders,
      deleteRecipe: this.handleDeleteRecipe,
      addFolder: this.addFolder,
      addRecipe: this.addRecipe,
      addComment: this.addComment
    };
    return (
      <ApiContext.Provider value = {value}>
        <div className = 'App'>
          <header className = 'App__header'><h2>Kitchen Community</h2>
            <nav>
              <Link to = '/'>Home | </Link>
              <Link to = '/about-us'>About Us | </Link>
              <Link to = '/recipes'>Recipes | </Link>
              <Link to = '/folders'>Folders | </Link>
              <Link to = '/add-folder'>Add Folder | </Link>
              <Link to = '/add-recipe'>Add Recipe </Link>
            </nav>
          </header>
          <main className='App__main'>
            {this.renderMainRoutes()}
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

export default App;