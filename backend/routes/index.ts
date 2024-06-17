import { Hono } from "hono";
import user from "./user";
import blog from "./blog";
const Router=new Hono();

Router.use('/user',user);
Router.use('/blog',blog);

export default Router;