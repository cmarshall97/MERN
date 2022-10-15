import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate() //Used to help us navigate to a different page if the request was successful

    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product by sending request to our server to this specific route and storing the object in the database
        axios.post('http://localhost:8000/api/createProduct', {
            title,
            price,
            description      
        }).then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                // console.log(res.data); //used to test server info. Can delete when you start using navigate
                navigate('/api/allProducts')
            }).catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div>
                <label>Title</label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                    runs this arrow function, setting that event's target's (input) 
                    value (what's typed into the input) to our updated state   */}
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label><br/>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label><br/>
                <input type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit">Create</button>
        </form>
    )
}
export default ProductForm;