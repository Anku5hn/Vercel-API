import express from 'express';
import {DeleteCtrl} from '../controllers/DeleteCtrl.js'
const DeleteRoute = express.Router();
DeleteRoute.post('/delete-this',DeleteCtrl);
export {DeleteRoute};