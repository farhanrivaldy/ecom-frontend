import Header from './Header';
import React,{useState,useEffect} from 'react';
import { Table } from 'react-bootstrap';

function ProductList(){
    const [data, setData] = useState([]);
    useEffect( () => {
        getData();
    }, []); 
    console.warn("result",data);

async function deleteOperation(id){
    if(window.confirm("Are you sure you want to delete product with id = " + id + " ?")){
        let result = await fetch("http://127.0.0.1:8000/api/delete/"+id,{
           method:"DELETE",
           });
            result = await result.json();    
            console.warn(result);
            getData();    
            alert("Product has been deleted");
    } else {
     getData();
   }
 }


async function getData(){
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
}

    return(
       <div>
        <Header />
         <h1>Product Lists</h1>
         <div className="col-sm-8 offset-sm-2">
         <Table striped bordered hover>
        <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Action</td>
        </tr>
        </thead>
        {data.map((item)=> (
        <tbody>
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
            <td><img style={{width:100}} src={"http://127.0.0.1:8000/"+item.file_path}></img></td>
            <td><span className="btnDelete" onClick={()=>deleteOperation(item.id)}>Delete</span></td>
        </tr>
        </tbody>
        ))}
        </Table>
        </div>
       </div>
    );
}

   
export default ProductList;