import request from "supertest";
import mongoose from "mongoose";
import User from "../app/models/user";
import server from  '../app/server'
import bcrypt from 'bcryptjs';
import Recipe from "../app/models/recipe";

const userUTId = new mongoose.Types.ObjectId()
const recipeKeys = ["_id", "title", "description", "timeCooking", "user"]
let userUT = {
    _id:userUTId,
    userName: "test",
    password: "123456",
    token:''
}

beforeEach(async()=>{
    
    await User.deleteMany()
    let user = new User(userUT)
    user.password = bcrypt.hashSync(user.password, 8)
    await user.save()
    let recipe = new Recipe({
        "title":"test",
        "description":"this is a test",
        "timeCooking":343145,
        "user":user._id
    })
    await recipe.save()

    const authRespose = await request(server).post("/login").send({
        userName: userUT.userName,
        password: userUT.password
    })
    userUT.token= authRespose.body.accessToken
})

afterEach(async() => {
    await server.close();
});

test("list user recipes", async() => {
    const respose = await request(server)
    .get("/user/recipes")
    .set('Content-Type', 'application/json')
    .set('x-access-token', userUT.token)
    .expect(200)
    if(!('recipes' in respose.body)) throw new Error("missing recipes key");
    if(!(Array.isArray(respose.body.recipes))) throw new Error("recipes is not an array");
    //respose.body.recipes[0].filter(()=>)
})