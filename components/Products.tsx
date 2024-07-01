'use client'
import { getProducts } from '@/app/api/products'
import { Product } from '@/types/types'
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts] = useState<Product[]>([])
    const URL = 'http://localhost:1337'
    

    // Fetch Products from API
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        }
        fetchProducts()
    }, [])

    // Render the component
    return (
        <section className='mt-10'>
            <div className='flex items-center justify-center mb-6'>
                <h1 className='text-green-700 font-bold text-4xl'>Featured Products</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.slice(0,8).map((product) => (
                    <div key={product.name} className='border p-4 rounded-lg shadow-md'>
                        <img src={`${URL}${product.url}`} alt={product.name} className='w-full mb-4'/>
                        <h2 className='text-xl font-bold text-gray-800 mb-2'>{product.name}</h2>
                        <p className='text-gray-700 mb-2'>{product.description}</p>
                        <p className='text-green-600 font-semibold mb-2 text-3xl'>${product.price}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Products
