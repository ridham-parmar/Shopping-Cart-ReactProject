import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem';

const CartPage = () => {

  const {items} = useSelector((state) => state.CartItem) ;
  // console.log(items) ;

  return (
    <div className="flex flex-col items-center justify-center flex-1 mt-24">
      {
        items.length > 0 ? 
        (<div className="flex max-w-[1200px] mx-auto">
            <div className="w-[60%] flex flex-col p-2">
              {
                items.map((item, index) => (
                  <CartItem key={item.id} item={item} index={index}/>
                ))
              }
            </div>

            <div className="w-[40%] my-14 flex flex-col justify-between p-4">
              <div>
                <h3 className="font-semibold text-xl text-green-800">Your Cart</h3>
                <h1 className="font-semibold text-5xl text-green-800">Summary</h1>
                <p className="text-xl  font-semibold text-gray-700 mt-4">Total Items : {items.length}</p>
              </div>
              <div className='flex flex-col'>
                <p className="text-xl  font-semibold text-gray-700">Total Amount : <span className="font-extrabold">$</span></p>
                <button className="mt-5 bg-green-600 transition duration-300 ease-in hover:cursor-pointer border-2 hover:bg-white border-green-600 p-3 px-10 rounded-md uppercase text-white hover:text-green-600 font-semibold tracking-wider">
                  Checkout Now
                </button>
              </div>
            </div>
          
          </div>
        ) :
        (
          <div className="flex flex-col items-center justify-center"> 
            <h2 className="text-xl font-semibold text-gray-700 mb-3">Your cart is Empty!</h2>
            <NavLink to="/">
              <button className="mt-5 bg-green-600 transition duration-300 ease-in hover:cursor-pointer border-2 hover:bg-white border-green-600 p-3 px-10 rounded-md uppercase text-white hover:text-green-600 font-semibold tracking-wider">Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default CartPage