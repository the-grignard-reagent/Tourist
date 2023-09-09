import express from 'express'
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

import User from "../models/User.js";
import { updateUser,
    getUser, deleteUser, getUsers}
    from '../controllers/user.js';
    
    import { createError } from '../utils/error.js';

// router.get("/checkauthentication", verifyToken, (req,res,next) => {
//     res.send("Hello, You are logged in!")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next) => {
//     res.send("Hello user , You are logged in and you can delete your account!")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next) => {
//     res.send("Hello user , You are logged in and you can delete all account!")
// })

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser)

// GET

router.get("/:id", verifyUser, getUser)  

// GET ALL
router.get("/", verifyAdmin, getUsers);


export default router