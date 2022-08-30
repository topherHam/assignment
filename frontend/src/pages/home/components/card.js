export const Card = ({recipe}) => {
    console.log(recipe)
    return (
        <div>
            <div>
                <h4><b>Title: </b>{recipe.title}</h4>
            </div>
            <div>
                <small><b>Time Cooking</b>{recipe.timeCooking}</small>
            </div>
            <div>
                <label>Description</label>
                <p>
                    {recipe.description}
                </p>
            </div>
        </div>
    )
}