import Link from 'next/link'
import React from 'react'

export default function JobStick() {
    return (
        <div className='grid grid-cols-1 justify-items-center items-center bg-white my-6 ' >
            <div className=" box-border  py-2 border-x-4 border-y-2 grow w-11/12 rounded-full">
                <div className='grid grid-cols-7 place-items-center '>
                <div className='self-center'>
            <img className='w-16 h-16 bg-gray-600 rounded-full' />
          </div>
                    <h1 className='text-center self-center text-lg font-bold'>Company Name</h1>
                    <h1 className='text-center self-center font-semibold'>Job Title</h1>
                    <h1 className='col-span-3 text-center font-light'><q>lorem ipsum lorem lorem lorem ipsum lorem lorem lorem ipsum lorem lorem lorem ipsum lorem lorem</q></h1>
                    <button className='bg-blue-700 py-2 px-4 rounded-3xl text-slate-200 hover:bg-blue-500 border-e-4 border-b-4 border-blue-900'>apply</button>
                </div>
            </div>
        </div>
    )
}
