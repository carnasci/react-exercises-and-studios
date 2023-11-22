
import RecipeDescription from './components/Description.jsx';
import RecipeIngredients from './components/Ingredient.jsx';
import RecipePhoto from './components/Photos.jsx';


function App() {
  

  return (
    <>
      <div className="recipePhotoBlock">
        <RecipePhoto />
        <div>
          <RecipeDescription />
          <RecipeIngredients />
        </div>
      </div>
    </>
  )
}

export default App