import React ,{useState,useEffect} from 'react'
import SKUList from '../components/sku/SKUList'
import {GetSKUs} from '../components/sku/SKUHandler'
import { Link,BrowserRouter as Router } from 'react-router-dom'

export default function AccessoriesListPage(props) {
    const [skus , setSKUs] = useState([])
    useEffect(()=>{
      GetSKUs().then(function(resp){
        setSKUs(resp)
      })
    },[skus])    
    return (
        <div>
            <h3 className="p-3">Aksesoris</h3>
            <Link className="btn btn-primary m-3" to={"/accessories/create"}>Tambah</Link>
            <SKUList className="table" skus={skus} />
        </div>
    )
}