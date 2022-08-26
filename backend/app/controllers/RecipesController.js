import Recipe from "../models/recipe.js";

const RecipeController = {};

/*RecipeController.ByUser = async (req, res)=>{
    try {
        const recipes = await Recipe.find({user: req.userId})
        res.json(recipes)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}*/

RecipeController.create = async (req, res)=>{
    const newRecipe = {
        title: req.body.title,
        description: req.body.description,
        timeCooking: req.body.timeCooking,
        user: req.userId
    }
    const recipe = new Recipe(newRecipe)
    let error = recipe.validateSync();
    if(error){
        res.status(400).json({message:error.errors})
        return
    }
    try {
        const newRecipe = await recipe.save()
        res.status(201).json({newRecipe})
    } catch (error) {
        res.status(400).json({message:error.message})
        
    }
}

export default RecipeController;