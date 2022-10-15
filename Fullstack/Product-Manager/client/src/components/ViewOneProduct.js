import axios from 'axios'
import React, {useEffect,useState} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'


const OneProduct = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [product,setProduct] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res)=> {
            console.log(res.data.result)
            setProduct(res.data.result)
        }).catch((err)=> {
            console.log(err)
        })
    },[id])//does not matter if id is in there or it is empty. putting ID eliminated the useEffect warning

    const deleteHandler = (id)=>{
        axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((res)=> {
            console.log('Deleted from database')
            navigate('/api/allProducts')
        }).catch((err)=> {
            console.log(err)
        })
    }

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/api/update/${product._id}`}>Update Product</Link>
            <button onClick={(e)=>deleteHandler(product._id)}>Delete Product</button>
        </div>
    )
}

export default OneProduct