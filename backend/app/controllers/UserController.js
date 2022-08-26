import Recipe from "../models/recipe.js";
import { definePagination } from "../utils/definePagination.js";

const UserController = {};

UserController.recipes = async (req, res)=>{
  try {
    const page = definePagination(req)
    const total = await Recipe.countDocuments({user: req.userId})
    const recipes = await Recipe.find({user: req.userId}).skip(page.skip).limit(page.limit)
  
    res.status(200).json({ recipes,total })
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}

export default UserController;