import { Hono } from "hono";

const blog=new Hono();

blog.post('/blog');
blog.put('/blog');
blog.get('/blog/:id');
blog.get('/blog/bulk');

export default blog;