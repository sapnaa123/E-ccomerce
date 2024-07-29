import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
function Header({search}){

    const numberOfItem = useSelector ((state) => state.cart.items)

     const[isOpen, setOpen] =useState(false)
     
     
     

     //updet handle open
     const handleOpen = () =>{
        setOpen(true)
     }

     //updet handle Close
     const handleClose = () =>{
        setOpen(false)
     }

    return <div className="bg-sacendryColor w-full fixed  text-white sm:flex gap-2 sm:justify-between sm:px-20 px-1 py-5">
        <h1 className="text-primaryColor text-4xl">eSuuq</h1>
        <ul style={{display: isOpen == true ? "block" : ""}} className="sm:flex  hidden gap-7 text-3xl">
            <li>Home</li>
            <li>About</li>
        </ul>
        
        <form >
            
            <input onChange={search} className="sm:w-[400px] h-[40px] px-2 absolute sm:right-[190px] right-16 top-4 rounded text-black" type="text" placeholder="Search item" />
            
        </form>
                
        <i style={{display: isOpen == true ? "none" : ""}} onClick={handleOpen}  class="fa-solid fa-bars sm:hidden absolute right-3 top-4 text-black text-5xl "></i>
        <i onClick={handleClose} style={{display: isOpen == true ? "block" : ""}} class="fa-solid fa-x hidden absolute right-3 top-4 text-black text-5xl "></i>
        <Link to="/cart">
        <h1><i style={{display: isOpen == true ? "block" : ""}} class="fa-solid fa-cart-shopping hidden text-primaryColor sm:flex text-4xl"> {numberOfItem.length} </i></h1>
        </Link>
    </div>
}
export default Header





