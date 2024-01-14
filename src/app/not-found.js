import React from 'react'

export default function notFound() {
  return (
    <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
            <div class="container flex flex-col items-center ">
                <div class="flex flex-col gap-6 max-w-md text-center">
                    <h2 class="font-extrabold text-9xl text-gray-600">
                        <span class=""></span>Not Found
                    </h2>
                    <p class="text-2xl md:text-3xl dark:text-gray-400">{"Sorry, we couldn't find this page."}</p>
                    <a href="/" class="px-8 py-4 text-xl font-semibold rounded bg-blue-500 text-gray-50 hover:text-gray-200">Back to homepage</a>
                </div>
            </div>
        </section>
  )
}
