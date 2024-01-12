import Image from 'next/image'
import React from 'react'
export default function Logo() {
  return (
    <>
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src="https://images.pexels.com/photos/652355/pexels-photo-652355.jpeg" width={50} height={100} loading='lazy' class="h-8 rounded-lg" alt="Company Logo"/>
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Job Website</span>
      </a>
     
    </>
      
)
}
