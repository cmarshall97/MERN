import axios from 'axios'
import React, {useState,useEffect} from 'react'


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
                        <p>{product.title}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList