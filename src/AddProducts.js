import Header from './Header'
import { useState } from 'react';

function AddProducts(){
  const [name,setName]=useState("");
  const [file,setFile]=useState("");
  const [price,setPrice]=useState("");
  const [description,setDescription]=useState("");

  async function addProduct() {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append('file',file);
    formData.append('price',price);
    formData.append('name',name);
    formData.append('description',description);
    let result=await fetch("http://127.0.0.1:8000/api/addProduct",
    {
    method :"POST",
    body: formData,
    });
      alert("Product Added!");
   }
    return(
    <div>
      <Header />
      <h1>Add Products</h1>
      <div className="col-sm-6 offset-sm-3">
          <br />
            <input type="text" className="form-control" placeholder="name" onChange={(e)=>setName(e.target.value)}></input>
            <input type="file" className="form-control" placeholder="File" onChange={(e)=>setFile(e.target.files[0])}></input>
            <input type="text" className="form-control" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}></input>
            <textarea className="form-control" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}></textarea>
            <br />
            <button className="btn btn-primary" onClick={addProduct}>Add Products</button>
      </div>
    </div>
    );
}
    
export default AddProducts;