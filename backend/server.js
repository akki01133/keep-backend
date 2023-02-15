import express from 'express';
import dotenv from 'dotenv';
import {connnectToDb} from './utils/db.js'
import authRoutes from './routes/authRoutes.js';
import apiRoutes from './routes/apiRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import { errorHandler, notFound, protect } from './utils/middleware.js';
import CONFIG from './utils/config.js';
import fs from 'fs'; 

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5000;
connnectToDb(
    ()=>app.listen(5000,()=>console.log(`listening on ${PORT}`))
    );

var dir = process.cwd()+CONFIG.MULTER_MEDIA_DESTINATION;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

app.get('/',(req,res)=>{
    res.send('Namaste World');
})

app.use('/auth', authRoutes)
app.use('/api/notes', apiRoutes)
app.use('/user',protect,userRoutes )


app.use(notFound);
app.use(errorHandler);
