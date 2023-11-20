import recipe from "./recipe.json"

function RecipeName() {
  let recipeName = recipe.map((data) => {
  return <h1 key={data.name}>{data.name}</h1>;
  });

  return (
    <>
      {recipeName}
    </>
  )
}

export default RecipeName;

//import return the name of the recipe as a level 1 header