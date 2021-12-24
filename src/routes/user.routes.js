import { Router } from 'express'
import { createUser } from '../controllers/user.controller'
import { verifyToken, isAdmin, checkRolesExisted } from '../middlewares'

const router = Router()

router.post("/", [verifyToken, isAdmin, checkRolesExisted] ,createUser)


export default router