import express from 'express'
import {CreateCtrl} from '../controllers/CreateCtrl.js'
const CreateRoute = express.Router();
CreateRoute.post('/add-text', CreateCtrl);
export {CreateRoute};