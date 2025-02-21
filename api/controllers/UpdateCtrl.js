import TextModel from '../models/TextModel.js'
const UpdateCtrl = async (req, res) =>{
    try{
        await TextModel.findByIdAndUpdate({_id:req.body.iddata},req.body.payload);
        res.status(200).send('updated');
    }catch(err){
        console.log(err);
        res.status(500).send(err);
    }
}
export { UpdateCtrl };