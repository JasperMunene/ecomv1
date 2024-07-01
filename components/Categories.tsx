'use client'
import { getCategories } from '@/app/api/categories'
import { Category } from '@/types/types'
import React, { useEffect, useState } from 'react'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const URL = 'http://localhost:1337'

  useEffect(() => {
    const fetchCategory = async() => {
      const category = await getCategories();
      setCategories(category);
    }
    fetchCategory();
  }, []);
  return (
    <section className='m-3 p-5'>
      <div className='flex items-center justify-center'>
        <h1 className='text-green-700 font-bold text-4xl'>Shop by Category</h1>
      </div>
      <div className='grid lg:grid-cols-6 grid-cols-3 gap-2 p-4 mt-5'>
        {categories.map((category) => (
          <div key={category.name} className='flex flex-col bg-green-300 p-4 rounded-lg gap-2 w-32 h-45  lg:w-48 lg:h-56'>
            <img className='w-full h-32 object-center hover:scale-110 p-4' src={`${URL}${category.url}`} alt={category.name} />
            <h2 className='text-sm font-semibold flex-grow text-center lg:text-xl'>{category.name}</h2>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories