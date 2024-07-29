import { useDispatch } from "react-redux"
import { AddItemCart, CalculateTotalPrice } from "../redux/reducer/cart"
import toast, { Toaster } from 'react-hot-toast';


function Product({items}){

    const dispach = useDispatch()

    const HandleCartItem = () =>{
        dispach(AddItemCart(items))
        dispach(CalculateTotalPrice())
        toast.success("Item has been added",{
            position:"top-right"
        })
    }

    return <div className="m-3 border-2 border-black  p-2 rounded">
        <img className="rounded sm:h-[200px] w-[150px] h-[100px]" src={items.image} />
        <div className="flex justify-between m-2  text-1xl">
        <p className="font-bold">{items.title}</p>
        <p className="font-bold">{items.category.name}</p>
        </div>
        <div className="flex justify-between mt-6">
        <h1 className="font-semibold text-2xl my-1">${items.price}</h1>
        <button onClick={HandleCartItem} className="w-[40px] h-[40px] pb-3 text-3xl text-white bg-primaryColor rounded-full">+</button>
        </div>
        <Toaster/>

    </div>


}
export default Product