import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
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
        <nav className = 'App_nav'>Navigation</nav>
          <h4>This will be the place for navigation links to Home, Recipe List, Folder List, Add Recipe and Add Folder areas</h4>
          <nav>
            <Link to = '/about-us'>About Us</Link>
            <Link to = '/recipes'>Home</Link>
            <Link to = '/folders'>Folders</Link>
            <Link to = '/add-folder'>Add Folder</Link>
            <Link to = '/add-recipe'>Add Recipe</Link>
          </nav>
        <header className = 'App_header'>
          <h1>Kitchen Community</h1>
          <h2>Share your favorite meal idea and kitchen tips</h2>
        </header>
        <main className='App_main'>
          <p><em>Graphics for the page will be added here in the design phase. All navigation will be handled from the Navigation bar at the top of the page</em></p>
      </main>
      </div>
      
    );
  }
}

export default App;