import Header from '../components/layout/Header.tsx';
import Footer from '../components/layout/Footer.tsx';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import {useState, useEffect} from 'react';
import ListComponent from '../components/ListComponent.tsx';
import axios from 'axios';
const Home = () => {
    //states
    const [bgBlur, setBgBlur] = useState<string>("");
    const [addForm, setAddForm] = useState<string>("hidden");
    const [editForm, setEditForm] = useState<string>("hidden");
    const [addTitle, setAddTitle] = useState<string>("");
    const [addDiscription, setAddDiscription] = useState<string>("");
    const [readText, setReadText] = useState([{},{}]);
    const [editTitle, setEditTitle] = useState<string>("");
    const [editDiscription, setEditDiscription] = useState<string>("");
    const [editID, setEditID] = useState<any>();
    //functions
    const handleCreate = async () => {
        try{
            await axios.post("http://localhost:8080/api/v1/create/add-text", {title: addTitle, discription: addDiscription});//endpoint for creating
            console.log("added")
        }catch(err){
            console.log(err);
        }
    }
    const handleEdit = async (value:any) =>{
        try{
            const iddata = value;
            await axios.post("http://localhost:8080/api/v1/update/update-this",{iddata: iddata, payload: {title: editTitle, discription: editDiscription}});//endpoint for editing
        }catch(err){
            console.log(err);
        }
    }
    const handleRead = async () =>{
        try{
            const read = await axios.get("http://localhost:8080/api/v1/read/get-data");//endpoint for read
            setReadText(read.data);
        }catch(err){
            console.log(err)
        }
    }
    const handleDelete = async (value:any)=>{
        const iddata = value;
        try{
            await axios.post("http://localhost:8080/api/v1/delete/delete-this",{iddata: iddata});//endpoint for delete
            handleRead();
        }catch(err){
            console.log(err);
        }
    }
    //read
useEffect(()=>{
    const handleRead = async () =>{
        try{
            const read = await axios.get("http://localhost:8080/api/v1/read/get-data");//endpoint for read
            setReadText(read.data);
        }catch(err){
            console.log(err)
        }
    }
    handleRead();
},[])
    return(
        <>
        <Header/>
        <div className={`h-screen w-full flex flex-col items-center overflow-y-scroll ${bgBlur}`}>
            {
                //map here
            }
            {
                readText.map((items:any, index)=>(
            <>
                <div className="bg-blue-300 w-5/6 mt-5 rounded-sm h-32 " key={index}>
                    <ListComponent title={items.title} discription={items.discription}/>
                         <div className="flex gap-2">
                            <p><span className="font-bold">Actions:</span></p>
                            <button className="rounded-sm hover:bg-blue-500 cursor-pointer" onClick={()=>{setEditID(items._id);setEditTitle(items.title);setEditDiscription(items.discription);setEditForm("");setBgBlur("blur-xl")}}> 
                            <EditOutlined /> 
                            </button>
                            <button className="rounded-sm hover:bg-red-500 cursor-pointer" onClick={()=>{handleDelete(items._id)}}>
                            <DeleteOutlined />
                            </button>
                        </div>
                </div>
            </>
))
            }
            {
                //map end
            }
            <div>
                    <button className="rounded-sm cursor-pointer px-2 py-2 my-5 hover:bg-blue-400" onClick = {()=>{setAddForm("");setBgBlur("blur-xl")}}>+ Add Items</button>
            </div>
        </div>
        {
            //form-add
        }
        <div className={`absolute top-50 left-[35%] w-96 h-96 bg-blue-300 rounded-sm flex flex-col gap-5 ${addForm}`}>
            <h2 className="my-1 mx-1">Add New Item</h2>
            <form className="mx-1">
                Title:
                <br/>
                <input className="rounded-sm bg-white w-full" onChange={(e)=>{setAddTitle(e.target.value)}}></input>
                <br/>
                Discription:
                <br/>
                <textarea className="w-full bg-white rounded-sm h-24" onChange = {(e)=>{setAddDiscription(e.target.value)}}></textarea>
                <div className="flex justify-between my-5">
                    <button className="cursor-pointer rounded-sm hover:bg-red-400 px-1 py-1" onClick = {()=>{setAddForm("hidden");setBgBlur("")}}>
                        Cancel
                    </button>
                    <button className="cursor-pointer rounded-sm hover:bg-blue-400 px-1 py-1" onClick={()=>{handleCreate();setAddForm("hidden");setBgBlur("")}}>
                        Add
                    </button>
                </div>
            </form>
        </div>
        {
            //form-edit
        }
            <div className={`absolute top-50 left-[35%] w-96 h-96 bg-blue-300 rounded-sm flex flex-col gap-5 ${editForm}`}>
            <h2 className="my-1 mx-1">Edit Item</h2>
            <form className="mx-1">
                Title:
                <br/>
                <input defaultValue={editTitle} className="rounded-sm bg-white w-full" onChange={(e)=>{setEditTitle(e.target.value)}}></input>
                <br/>
                Discription:
                <br/>
                <textarea defaultValue={editDiscription} className="w-full bg-white rounded-sm h-24" onChange={(e)=>{setEditDiscription(e.target.value)}}></textarea>
                <div className="flex justify-between my-5">
                    <button className="cursor-pointer rounded-sm hover:bg-red-400 px-1 py-1" onClick = {()=>{setEditForm("hidden");setBgBlur("")}}>
                        Cancel
                    </button>
                    <button className="cursor-pointer rounded-sm hover:bg-blue-400 px-1 py-1" onClick={()=>{handleEdit(editID);setEditForm("hidden");setBgBlur("")}}>
                        Done
                    </button>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    )
}
export default Home;