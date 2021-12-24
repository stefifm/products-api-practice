import { Router } from 'express'
const router = Router()

import { signin, signup } from '../controllers/auth.controller'
import { checkDuplicateUser, checkRolesExisted } from '../middlewares'


router.post("/signup", [checkDuplicateUser, checkRolesExisted],signup)
router.post("/signin", signin)


export default router