import request from "supertest";
import mongoose from "mongoose";
import User from "../app/models/user";
import server from  '../app/server'
import bcrypt from 'bcryptjs';

const userUTId = new mongoose.Types.ObjectId()
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

    const authRespose = await request(server).post("/login").send({
        userName: userUT.userName,
        password: userUT.password
    })
    userUT.token= authRespose.body.accessToken
})

afterEach(async() => {
    await server.close();
});

test("create recipe", async()=>{
    const respose = await request(server)
    .post("/recipe").send({
        "title":"test",
        "description":"this is a test",
        "timeCooking":343145
    })
    .set('Content-Type', 'application/json')
    .set('x-access-token', userUT.token)
    .expect(201)
})