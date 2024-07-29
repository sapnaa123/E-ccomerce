import axios from "axios"
import Product from "./Product"
import { useEffect,useState } from "react"
import { ClipLoader } from "react-spinners"
import Header from "./Header"

function ProductList(){
    const[data,setData]=useState([])
    const[loading, setLoading] = useState(false)
    const [searchItem, setSearchItem] = useState ("")

    const handleSearch = (event) =>{
        setSearchItem(event.target.value)
    }

    const getAllProducts=()=>{
        setLoading(true)
        axios.get("https://fakestoreapi.com/products").then((Response)=>{
            setData(Response.data)
            setLoading(false)

        }).catch((error)=>{
            console.log(error)
        })
    }

     useEffect(()=>{
      getAllProducts()
     },[])

  return  <div>
      <Header search={handleSearch}/>
  
  {loading === true ? <ClipLoader className="ml-[600px] mt-10" loading={loading} /> : <div className="grid grid-cols-2 pt-20 sm:grid-cols-[250px_250px_250px_250px] sm:gap-5 justify-center">
    {
        data.filter((products)=>{
            return searchItem.toLowerCase() == "" ? products :
            products.title.toLowerCase().includes(searchItem.toLowerCase())
        }) .map((item)=>{
            return <Product items={item}/>
        })
    }
  </div>
}
    </div> 
}
export default ProductList
