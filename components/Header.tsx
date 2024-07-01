'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutGrid, Search } from 'lucide-react'
import { getCategories } from '@/app/api/categories'
import { Category } from '@/types/types'
import { Button } from './ui/button'
import { useAuth, SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

const Header = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const URL = 'http://localhost:1337'
    
    useEffect(() => {
        const fetchCategory = async () => {
            const category = await getCategories();
            setCategories(category);
        }
        fetchCategory();
    }, []);

    return (
        <nav className='flex flex-col md:flex-row items-center justify-between p-6 bg-transparent border-2 shadow-xl w-full'>
            <div className='mb-4 md:mb-0'>
                <Link href='/'>
                    <h1 className='text-5xl md:text-4xl font-bold text-yellow-400'>blink<span className='text-green-600'>it</span></h1>
                </Link>
            </div>
            <div className='mb-4 '>
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center gap-2 text-gray-700 font-semibold focus:outline-none text-2xl'>
                        <LayoutGrid size={32} strokeWidth={2.25} /> Categories
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-white shadow-lg rounded-md mt-2'>
                        <DropdownMenuLabel className='font-bold text-gray-700 px-4 py-2 text-xl'>Categories</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {categories.map((category) => (
                            <DropdownMenuItem key={category.name} className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100'>
                                <img src={`${URL}${category.url}`} alt={category.name} className='w-7 h-7 rounded-full' />
                                <span className='text-gray-800 text-xl'>{category.name}</span>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='w-full md:w-auto flex items-center bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500'>
                <input
                    type='text'
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full px-4 py-2 rounded-md focus:outline-none '
                />
                <button className='p-2 focus:outline-none'>
                    <Search size={20} className='text-gray-500' />
                </button>
            </div>
            <div className='flex gap-3 mt-4'>
                <SignedOut>
                    <SignInButton>
                        <Button size='lg'>Login</Button>
                    </SignInButton>
                    <SignUpButton>
                        <Button size='lg'>Sign Up</Button>
                    </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Header
