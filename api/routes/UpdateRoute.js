import express from 'express';
import {UpdateCtrl} from "../controllers/UpdateCtrl.js"
const UpdateRoute = express.Router();
UpdateRoute.post('/update-this', UpdateCtrl);
export {UpdateRoute};