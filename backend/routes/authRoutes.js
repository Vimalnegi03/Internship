import { register,login,getUser,logout} from "../controllers/authController.js";
import { Router } from "express";
import jwtVerify from "../middlewares/authmiddleware.js";
const authRouter=Router();
authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.post("/logout",logout)
authRouter.get("/getUser",jwtVerify,getUser)
export default  authRouter;