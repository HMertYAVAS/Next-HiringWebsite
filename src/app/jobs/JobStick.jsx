import Link from 'next/link'
import React from 'react'

export default function JobStick() {
    return (
        <div className='grid grid-cols-1 justify-items-center items-center bg-white my-6 ' >
            <div className=" box-border  py-2 border-x-4 border-y-2 grow w-11/12 rounded-full">
                <div className='grid grid-cols-6 place-items-center gap-2'>
                    <div className='self-center'>
                        <img className='lg:w-16 lg:h-16 md:w-16  md:h-16 w-8 h-8 bg-gray-600 rounded-full' />
                    </div>
                    <div>
                    <h1 className='text-center self-center md:text-lg lg:text-lg text-sm font-semibold mb-1 leading-4 '>Company Name</h1>
                    <h2 className='text-center self-center md:text-sm lg:text-sm text-xs font-medium leading-3'>Software Engineer</h2>
                    </div>
                    <p className='col-span-3 text-center font-light line-clamp-2  md:text-sm lg:text-sm text-xs'><q>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus lobortis nisl at convallis. Pellentesque tincidunt neque et efficitur interdum. Donec tortor ipsum, facilisis elementum accumsan sit amet, tincidunt quis justo. Praesent nec lorem laoreet, tempor orci nec, feugiat nibh. Praesent gravida semper blandit. Maecenas vitae vehicula dui. Maecenas nunc purus, dictum in libero sit amet, auctor vehicula lorem. Nunc accumsan massa eget sem semper rhoncus. Fusce aliquet augue risus, nec congue nibh maximus nec. Maecenas ac neque vitae neque venenatis vestibulum sit amet vel libero. Ut quis elit eros. Vivamus sit amet congue neque. Proin ornare sapien ac pretium tempus. Cras ut nulla ultrices, congue odio gravida, luctus velit. Nullam suscipit, mauris at accumsan ornare, felis mauris pharetra ante, at auctor urna diam id lectus. Aliquam vestibulum dolor sem, eget tincidunt ex consequat sit amet.    
                    </q></p>
                    <button style={{}} className='bg-blue-700 lg:py-2 lg:px-4 md:py-2 md:px-4 sm:py-2 sm:px-4 py-1 px-1 sm:text-sm lg:text-base text-sm rounded-3xl text-slate-200 hover:bg-blue-500 border-e-4 border-b-4 border-blue-900'>apply</button>
                </div>
            </div>
        </div>
    )
}
