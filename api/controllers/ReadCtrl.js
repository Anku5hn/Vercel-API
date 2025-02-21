import TextModel from '../models/TextModel.js'
const ReadCtrl = async (req, res) =>{
    try{
        const ReadData = await TextModel.find({});
        res.status(200).json(ReadData);
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
export {ReadCtrl};