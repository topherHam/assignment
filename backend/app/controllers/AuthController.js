import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { LOGIN_401_MSG, LOGIN_404_MSG, SECRET_KEY, TOKEN_EXPIRE_IN } from "../constants.js";

const AuthController = {};

AuthController.signup = async (req, res)=>{
    const user = new User({
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    try {
        const newUser = await user.save()
        res.status(201).json({userName:newUser.userName})
    } catch (error) {
        res.status(403).json({message:error.message})
    }
}

AuthController.login = (req, res) => {
    let userName = req.body.userName
    User.findOne({userName:userName}).exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (!user) {
          return res.status(404).send({ message: LOGIN_404_MSG });
        }
  
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          return res.status(401).send({
            accessToken: null,
            message: LOGIN_401_MSG
          });
        }
        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h'})
        user.token = token
        user.save()
        res.status(200).send({
          id: user._id,
          userName: user.userName,
          accessToken: token
        });
      });
  };

AuthController.logout = async(req, res) => {
  let user = await User.findById(req.userId)
  user.token = ''
  user.save()
  res.send({msg : 'You have been Logged Out' });
}

export default AuthController;