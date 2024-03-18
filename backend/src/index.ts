import { Hono } from 'hono'
import {decode, sign, verify,jwt } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
}>();
app.get("/",(c)=>{
	return c.text("Hahhaha")
})
app.route("/api/v1/user", userRouter)
app.route("/api/v1/blog", blogRouter)


// app.use('api/v1/blog/*', async (c, next)=>{
//   // get the header
//   // verify the header
//   // if the header is correct, we can proceed
//   // if not, we return the user a 403 status code
//   const header = c.req.header("authorization") || ""
//   // Bearer token -> ["Bearer", "token"]
//   const token = header.split(" ")[1]
//   const response = await verify(token , c.env.JWT_SECRET)

//   if (response.id){
//     next()
//   } else {
//     c.status(403)
//     return c.json({
//       error : "unauthorized"
//     })
//   }
//   await next()
// })

//
// app.post('/api/v1/user/signup', async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
// }).$extends(withAccelerate())

//   const body = await c.req.json()

//   try {
//     const user = await prisma.user.create({
//       data : {
//         email : body.email,
//         password : body.password,
//         name : body.name,
//       }
//     })
//     const token = await sign({id: user.id}, c.env.JWT_SECRET)
//     return c.json({
//       jwt: token
//     })
//   } catch (error) {
//     console.log(error)
//     c.status(403)
//     return c.text("Invalid")
//   }
  
// })

// app.post('/api/v1/user/signin', async(c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate())

//   const body = await c.req.json()
//   try {const user = await prisma.user.findUnique({
//     where : {
//       email : body.email,
//       password : body.password,
//     }
//   })

//   if (!user){
//     c.status(403)
//     return c.json({ error : "user not found"})
//   }

//   const token = await sign({id: user.id}, c.env.JWT_SECRET)

//   return c.json({
//     jwt : token
//   })} catch(e){
//     console.log(e)
//     c.status(411)
//     return c.text('Invalid')
//   }
  
// })
// app.post('/api/v1/blog', (c) => {
//   return c.text("Hello Hono")
// })
// app.put('/api/v1/blog', (c) => {
//   return c.text("Hello Hono")
// })
// app.get('/api/v1/blog/:id', (c)=>{
//   return c.text("Hoo")
// })

export default app
