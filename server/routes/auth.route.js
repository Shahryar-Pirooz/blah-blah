import express from 'express'

import { register, login, updateUser } from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/update-user').post(updateUser)

export default router
