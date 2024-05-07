const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connection= require('../url/dbconnect.js')

//dotenv config
dotenv.config()

//rest
const app = express()

//middleware
app.use(express.json())
app.use(cors({ 
    // origin:'https://abc.onrender.com',
    AccessControlAllowOrigin: '*',  
    origin: '*',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' 
  }))
app.use('/api/v1/portfolio',require('../routes/portfolioRoutes.js'))

// //route
// app.get('/',(req,res)=>{
//     res.send('<h1>hi</h1>')
// })

const PORT = process.env.PORT

const connectDB = async() =>{
    try{
      await connection(process.env.MONGO_URI)
      app.listen(PORT,()=>{console.log(`Server is listening on port ${PORT}`)})
  
    }
    catch(err){
      console.log(err)
    }
  }
  
  connectDB()