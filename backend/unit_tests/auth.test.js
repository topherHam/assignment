import request from "supertest";
import mongoose from "mongoose";
import User from "../app/models/user";
import server from  '../app/server'
import bcrypt from 'bcryptjs';

const userUTId = new mongoose.Types.ObjectId()
const userUT = {
    _id:userUTId,
    userName: "test",
    password: "123456"
}

beforeEach(async()=>{
    await User.deleteMany()
    let user = new User(userUT)
    user.password = bcrypt.hashSync(user.password, 8)
    await user.save()
})

afterEach(async() => {
    await server.close();
});

test("sign up user succsessfully", async()=>{
    const respose = await request(server).post("/signup").send({
        userName: 'newuser',
        password: 'newuserpassword'
    }).expect(201)
})

test("no sign up duplicated username", async()=>{
    const respose = await request(server).post("/signup").send({
        userName: userUT.userName,
        password: userUT.password
    }).expect(400)
})

test("login user succsessfully", async()=>{
    const respose = await request(server).post("/login").send({
        userName: userUT.userName,
        password: userUT.password
    }).expect(200)
})

test("should no login no registred user", async()=>{
    const respose = await request(server).post("/login").send({
        userName: "noregisteredusername",
        password: "123456"
    }).expect(404)
})

test("should no login user with invalid credentials", async()=>{
    const respose = await request(server).post("/login").send({
        userName: userUT.userName,
        password: "wrongpass"
    }).expect(401)
})