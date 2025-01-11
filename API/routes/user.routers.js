const express = require("express");
const userRouter = express.Router();
const { createUser, FindUser, DeletUser, updateuser, Login } = require("../controllers/user.controllers");

userRouter.post("/createUser", createUser);
userRouter.post("/login",  Login)

userRouter.post("/FindUser", FindUser)
userRouter.delete("/DeletUser", DeletUser)
userRouter.patch("/ updateuser",  updateuser)

module.exports = userRouter;