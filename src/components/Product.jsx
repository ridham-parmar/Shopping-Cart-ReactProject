import React from 'react'
import {toast} from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { add, remove } from '../redux/slices/CartItemSlice';


const Product = ({product}) => {

   let {items} = useSelector((state) => (state.CartItem)) ;
   const dispatch = useDispatch() ;
  
  function addItem() {
    toast.success('Item Added To Cart!') ;
    dispatch(add(product)) ;
  }
  
  function removeItem() {
    toast.error('Item Removed From Cart!') ;
    dispatch(remove(product.id)) ;
  }

  return (
    <div className="group hover:scale-110 transiti duration-300 ease-in hover:shadow-[0px_0px_95px_53px_#00000024] flex flex-col items-center gap-3 mt-10 ml-5 justify-between p-4 rounded-xl  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
    
      <h2 className="truncate w-40 text-gray-700 font-semibold text-lg">{product.title.substring(0, 17) + "..."}</h2>

      <p className="w-40 overflow-hidden text-gray-400 font-normal text-[10px]">{product.description.substring(0, 51) + "..."}</p>

      <img src={product.image} className="h-[180px]" alt="Product"/>

      <div className="flex justify-between w-full mt-5">
        <h2 className="text-green-600 font-semibold">${product.price}</h2>

        {
          items.some((item) => item.id === product.id) ?
          (
            <button onClick={() => removeItem()}
            className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in rounded-full font-semibold p-1 px-3 text-[12px] text-gray-700 border-2 border-gray-700 tracking-wide hover:cursor-pointer uppercase text-xs">
              Remove Item
            </button>
          ) :
          (
            <button onClick={() => addItem()}
            className="group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in rounded-full font-semibold p-1 px-3 text-[12px] text-gray-700 border-2 border-gray-700 tracking-wide hover:cursor-pointer uppercase text-xs">
              Add To Cart
            </button>
          )
        }
        
      </div>
    </div>
  )
}

export default Product