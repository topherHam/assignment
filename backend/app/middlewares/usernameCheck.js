import { SIGNIN_400_MSG } from "../constants.js"
import User from "../models/user.js"

const checkDuplicateUsername = (req, res, next) => {
    User.findOne({userName:req.body.userName}).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err.message })
        return
      }

      if (user) {
        res.status(400).send({ message: SIGNIN_400_MSG })
        return
      }
      next()
    })
};
export default checkDuplicateUsername;