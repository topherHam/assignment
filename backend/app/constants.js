import dotenv from 'dotenv'

dotenv.config({ path: process.env.ENV_FILE })

export const DATABASE_URL = process.env.DATABASE_URL
export const SECRET_KEY = process.env.SECRET_KEY
export const TOKEN_EXPIRE_IN = process.env.TOKEN_EXPIRE_IN

export const LIMIT_PER_PAGE = 10

export const SIGNIN_400_MSG = "Username is already taken"
export const LOGIN_401_MSG = "Invalid crendentials"
export const TOKEN_401_MSG = "Unauthorized"
export const TOKEN_403_MSG = "No token provided"
export const USER_403_MSG = "Access Denied"
export const LOGIN_404_MSG = "Account doesn't exist"
