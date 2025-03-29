const messageRote = require("./messages.router");
const proudctRote = require("./product.routers");
const userRouter = require("./user.routers");

const Routes = [
    userRouter,
    proudctRote,
    messageRote
]


module.exports = Routes