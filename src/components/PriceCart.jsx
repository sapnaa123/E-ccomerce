import { useSelector } from "react-redux"

function priceCart(){
    const price = useSelector((state) => state.cart.totalPrice)
    const totalquantity = useSelector((state) => state.cart.items)
    
    return <div>
        <div className="w-[300px] sm:fixed ml-10 sm:right-20  bottom-2 sm:top-20 h-[300px] p-4 border-2 border-gray-500">
            <h1>Total quantity</h1>
            <h1 className="font-bold"> {totalquantity.length} </h1>
            <h1 className="mt-8">Total price</h1>
            <h1 className="font-bold">${price}</h1>
            <button className="bg-black px-24 mt-10 text-white">Pay Now</button>
        </div>
    </div>
}

export default priceCart