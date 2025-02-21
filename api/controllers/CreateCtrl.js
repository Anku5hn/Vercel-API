import TextModel from "../models/TextModel.js";
const CreateCtrl = async (req, res) => {
  try {
    const newText = new TextModel(req.body);
    await newText.save();
    res.status(201).send("Text saved");
  } catch (err) {
    console.log(err);
    res.status(500).error(error);
  }
};
export { CreateCtrl };
