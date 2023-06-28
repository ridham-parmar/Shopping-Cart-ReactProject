import React, { useEffect, useState } from 'react'
import Product from '../components/Product';

const HomePage = () => {
    const API_URL = 'https://fakestoreapi.com/products' ;
    const [loading, setLoading] = useState(false) ;
    const [products, setProducts] = useState([]) ;

    async function fetchData() {
        setLoading(true) ;
        try {
            const response = await fetch(API_URL) ;
            const data = await response.json() ;
            setProducts(data) ;
        } catch (error) {
            console.log('Error while fetching API') ;
        }
        setLoading(false) ;
    }

    useEffect(() => {
        fetchData() ;
    }, [])

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[72rem] mx-auto p-2 mt-24">
        {
            products.map((product) => (
                <Product key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default HomePage