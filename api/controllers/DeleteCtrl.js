import TextModel from '../models/TextModel.js'
const DeleteCtrl = async (req, res) =>{
    try{
        await TextModel.findOneAndDelete({_id:req.body.iddata});
        res.status(201).send("deleted");
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
export {DeleteCtrl};