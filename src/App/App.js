import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AboutUs from '../AboutUs/AboutUs';
import AddRecipe from '../AddRecipe/AddRecipe';
import AddFolder from '../AddFolder/AddFolder';
import FolderListMain from '../FolderListMain/FolderListMain';
import Recipe from '../Recipe/Recipe';
import RecipeListMain from '../RecipeListMain/RecipeListMain';
import RecipePageMain from '../RecipePageMain/RecipePageMain';


class App extends Component {

//   renderNavRoutes() {
//     return (
//         <>
//           {['/', '/folders/:id'].map(path => (
//                     <Route
//                         exact
//                         key={path}
//                         path={path}
//                         component={FolderListMain}
//                     />
//                 ))}
//             <Route path = '/recipes/:recipeId' component = {RecipePageMain} />
//             <Route path = '/add-folder' component = {AddFolder} />
//             <Route path = '/add-recipe' component = {AddRecipe} />
//         </>
//     );
// }

//   renderMainRoutes() {
//     return (
//       <>
//         {['/', '/api/folders/:folderId'].map(path => (
//             <Route
//                 exact
//                 key={path}
//                 path={path}
//                 component={FolderListMain}
//             />
//         ))}
//         <Route path = '/recipes/:recipeId' component = {RecipePageMain} />
//       </>
//     )
//   }

  render() {
    return (
      <div className = 'App'>
        <nav className = 'App_nav'>Navigation</nav>
          <h4>This will be the place for navigation links to Home, Recipe List, Folder List, Add Recipe and Add Folder areas</h4>
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
      </main>
      </div>
      
    );
  }
}

export default App;