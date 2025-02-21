import express from "express"
import {ReadCtrl} from "../controllers/ReadCtrl.js"
const ReadRoute = express.Router();
ReadRoute.get('/get-data',ReadCtrl);
export {ReadRoute};