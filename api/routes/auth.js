import express from 'express'
import { register } from '../controllers/auth.js';
import { login } from '../controllers/auth.js';
const router = express.Router();

router.get("/", (req,res) =>{
    res.send("Hello, this is an auth endpoint")
})

router.get("/register", (req,res) =>{
    res.send("Hello, this is a register endpoint")
})


router.post("/register", register)
router.post("/login", login)

export default router