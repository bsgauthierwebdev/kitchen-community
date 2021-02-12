import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
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
            <Link to = '/RecipeListMain'>Home</Link>
            <Link to = '/FolderListMain'>Folders</Link>
            <Link to = 'AddFolder'>Add Folder</Link>
            <Link to = 'AddRecipe'>Add Recipe</Link>
          </nav>
        <header className = 'App_header'>
          <h1>Kitchen Community</h1>
          <h2>Share your favorite meal idea and kitchen tips</h2>
        </header>
        <main className='App_main'>
          <section className = 'App_main_body'>
            <h3>Make something new!</h3>
            <p>Share your favorite meal ideas and kitchen hacks. Try something new for dinner tonight. Help inspire someone else.</p>
            <p>We've all been cooking at home more this past year. And while there are hundreds of websites from celebrity chefs who do this kind of thing for a living, not everyone wants the challenge of finding white truffles or baking a souffle. Sometimes we just want to try something new with the ingredients we already have on hand. Or we're looking for some tricks to make our kitchen lives easier.</p>
            <p>Share your tips and ideas here with other home cooks who are looking for the same thing. Who knows, you may find something new for your regular meal rotation, or teach someone a new way to utilize those sardines in the pantry.</p>
          </section>
          <section className = 'App_main"signup'>
            <header>
              <h3>Start your culinary adventure now</h3>
            </header>
            <form class='signup-form'>
                <div>
                  <label htmlFor="first-name">First name</label>
                  <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                </div>
                <div>
                  <label htmlFor="last-name">Last name</label>
                  <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                </div>
                <div>
                  <label htmlFor="username">Email</label>
                  <input type="text" name='username' id='username' />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name='password' id='password' />
                </div>
                <button type='submit'>Sign Up</button>
            </form>
          </section>
          <section className = 'App_main_login'>
            <p>Already a member? Log in to your account here</p>
            <form class = 'login-form'>
              <div>
                <label htmlFor = 'username'>Username</label>
                <input type = 'text' name = 'username' id = 'username' />
              </div>
              <div>
                <label htmlFor = 'password'>Password</label>
                <input type = 'password' name = 'password' id = 'password' />
              </div>
                <button type = 'submit'>Log In</button>
            </form>
          </section>
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