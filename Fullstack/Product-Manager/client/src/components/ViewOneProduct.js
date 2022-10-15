import axios from 'axios'
import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'


const OneProduct = () => {

    const {id} = useParams()

    const [product,setProduct] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res)=> {
            console.log(res)
            setProduct(res.data.result)
        }).catch((err)=> {
            console.log(err)
        })
    },[])

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )

}
export default OneProduct