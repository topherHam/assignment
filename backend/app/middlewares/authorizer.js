import jwt from 'jsonwebtoken';
import { SECRET_KEY, TOKEN_401_MSG, TOKEN_403_MSG, USER_403_MSG } from '../constants.js';
import User from '../models/user.js';

const authorizer = async (req, res, next) => {
    let token = req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({ message: TOKEN_403_MSG });
    }
  
    jwt.verify(token, SECRET_KEY, async (err, decoded) => {
      if(err){
        return res.status(401).send({ message: TOKEN_401_MSG });
      }
      let user = await User.findById(decoded.id)
      if(!user){
        return res.status(403).send({ message: USER_403_MSG });
      }
      if (token !== user.token) {
        return res.status(401).send({ message: TOKEN_401_MSG });
      }
      req.userId = decoded.id;
      next();
    });
  };

  export default authorizer;