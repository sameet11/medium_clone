import { Hono } from 'hono'
import { cors } from 'hono/cors'
import Router from '../routes';

const app = new Hono()

app.use(cors());

app.use('/api/vi',Router);

export default app
