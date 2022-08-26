import mongoose from "mongoose";

const recipesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    timeCooking: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

const Recipe = mongoose.model('Recipe', recipesSchema)
export default Recipe