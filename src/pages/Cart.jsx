import { useSelector,useDispatch } from "react-redux"
import PriceCart from "../components/PriceCart"
import { CalculateTotalPrice, removeItemFromCart } from "../redux/reducer/cart"
import toast, { Toaster } from 'react-hot-toast';


function Cart (){

    const dispach = useDispatch()

    const allItems = useSelector((state) => state.cart.items)

    const handleRemove = (data) =>{
        dispach(removeItemFromCart(data))
        dispach(CalculateTotalPrice())
        toast.success("Item has been Remove",{
            position:"top-right"
        })
    }

    return <div>
        <h1>This is cart page</h1>
        <div className="sm:flex gap-8 sm:justify-center">
            <div className="sm:mr-32 m-4 mb-20">

        

        {
          allItems.length > 0 ?   allItems.map((items) =>{
                return <div className="flex gap-6 border-2 border-blue-400 items-center my-4 px-4 py-5 sm:w-[500px] w-[350px] h-[160px]">
                <img className="rounded  w-[100px] h-[100px]" src={items.image} />

                <div>
                <h1> {items.title} </h1>
                <h1 className="">{items.price}</h1>


                </div>
                <button onClick={() => handleRemove(items)} className="text-3xl ml-18">x</button>

                  </div>
            })
            :
            <p>there is no data</p>

        }
         </div>
        {
        allItems.length > 0 ? <PriceCart/> :""
        }
        </div>
       <Toaster/>
    </div>
}

export default Cart