import Header from '@/components/Header'
import React from 'react'
import { SignUp } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Categories from '@/components/Categories';
import Products from '@/components/Products';


export default async function Home() {
  const user = currentUser();
   
  if (!user) {
    return <SignUp />
  }
  return (
    <div>
     <Header />
     <Categories />
     <Products />
    </div>
  )

}
  
  

