import express from 'express';
import cors from 'cors';
const app = express()
import serverless from 'serverless-http'
import serverRoutes from '../routes/serveRoutes.js';


app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json())
app.use(serverRoutes)


// let listener = app.listen(process.env.PORT || 3030, () =>{
//   console.log(`Server is running ${listener.address().port}`);
// })
// let handler = serverless(app);
// export default handler(async (event, context) => {
//   const result = await handler(event, context);
//   console.log(event);
//   console.log(context);
//   return result;
// }) 

module.exports.handler = serverless(app);