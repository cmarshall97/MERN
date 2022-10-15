import axios from 'axios'
import React, {useState,useEffect} from 'react'
import{Link} from 'react-router-dom'


const ProductList = () => {

const [list,setList] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/allProducts')
        .then((res)=> {
            console.log(res)
            setList(res.data.result)
        }).catch((err)=> {
            console.log(err)
        })
    },[])
    return (
        <div>
            <h1>All Products:</h1>
            {
                list.map((product)=>(
                    <div>
                        <Link to= {`/api/product/${product._id}`}>{product.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList