import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { remove } from '../redux/slices/CartItemSlice';

const CartItem = ({item, index}) => {
  console.log(item) ;
  const dispatch = useDispatch() ;
  const {items} = useSelector((state) => state.CartItem) ;
  // console.log(items)
  // let length = items.length ;
  function removeItem() {
    toast.error('Item Removed From Cart!') ;
    dispatch(remove(item.id)) ;
  }
  // flex items-center justify-center p-8 px-14 gap-5 mx-5
  // {`${length - (index+1) > 0 ? "border-2 border-slate-700" : "border-0"}`}
  return (
    <div className={`${items.length - (index+1) > 0 ? "border-b-2 border-slate-700" : "border-0"} flex items-center justify-center p-8 px-14 gap-5 mx-5`}>
      <div className="w-[30%]">
        <img src={item.image} />
      </div>

      <div className="flex flex-col w-[70%] ml-10 gap-y-4">
        <h2 className="text-xl text-slate-700 font-semibold">{item.title}</h2>
        <p className="text-slate-700 font-medium">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>

        <div className="flex justify-between">
          <h2 className="font-bold text-lg text-green-600"> ${item.price} </h2>
          <div onClick={() => removeItem()}
          className="bg-red-200 p-3 rounded-full text-red-800 hover:bg-red-400 hover:cursor-pointer hover:text-white transition duration-300 ease-in">
            <MdDelete/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem