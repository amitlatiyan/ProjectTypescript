import express from 'express'
import {user} from '../controllers/userController'
const userRouter = express.Router()


userRouter.get('/user', user)


 

export {
    userRouter
}