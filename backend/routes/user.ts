import { Hono } from "hono";
import { signup,signin } from "../controller/user";
const user=new Hono();

user.post('/signup',signup);
user.post('/signin',signin)

export default user