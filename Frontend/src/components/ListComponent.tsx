import React from 'react'
interface Props{
    title: string;
    discription: string;
}
const ListComponent:React.FC<Props> = ({title, discription}) =>{

    return(
        <>
        <div className="w-full h-24 flex flex-col overflow-y-scroll">
                    <p><span className="font-bold">Title: </span>{title}</p>
                    <p><span className="font-bold">Discription: </span>{discription}</p>
        </div>
        </>
    )

}
export default ListComponent;