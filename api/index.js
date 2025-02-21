import  express  from "express";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import ConnectDB from './config/ConnectDB.js';
import {CreateRoute} from './routes/CreateRoute.js'
import {ReadRoute} from './routes/ReadRoute.js'
import {UpdateRoute} from './routes/UpdateRoute.js';
import {DeleteRoute} from './routes/DeleteRoute.js'
dotenv.config();
const app = express();
app.use(cors({
  origin: ["https://ankush-io-tech-frontend.vercel.app/"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/create', CreateRoute);//endpoint for creating
app.use('/api/v1/read', ReadRoute);//endpoint for reading
app.use('/api/v1/update',UpdateRoute);//endpoint for updating
app.use('/api/v1/delete', DeleteRoute);//endpoint for deleting
const PORT = process.env.PORT || 8080;
app.get('/', (req, res)=>{
    res.send("Server is running");
})
ConnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})
