import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditOneProduct = ()=> {

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const {id} = useParams ()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res)=> {
            setTitle(res.data.result.title)
            setPrice(res.data.result.price)
            setDescription(res.data.result.description)
        }).catch((err)=> {
            console.log(err)
        })
    }, [id])

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/update/${id}`,{
            title,
            price,
            description
        }).then((res)=>{
            navigate('/api/allProducts')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
            <div>
                <label>Title</label><br/>
                <input type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label><br/>
                <input type="text" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label><br/>
                <input type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit">Update Product</button>
        </form>
        </div>
    )
}

export default EditOneProduct