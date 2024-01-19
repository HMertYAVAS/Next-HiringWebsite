import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <article className="relative">
        <img
          src="https://images.pexels.com/photos/4342126/pexels-photo-4342126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-1/3 object-cover"
          alt="Career Opportunities"
        />

        <h3 className="absolute lg:text-6xl md:text-4xl sm:text-2xl text-xl text-blue-700 lg:top-24 md:top-16 sm:top-16 top-8 left-1/2 -translate-x-1/2 text-center">
          Ascend The Career Ladder With Our Opportunities
        </h3>
        <h3 className="absolute md:text-lg sm:text-sm text-sm bg-slate-500 bg-opacity-60 rounded-lg text-gray-200 bottom-1/4 left-1/2 -translate-x-1/2 text-center">
          Discover compelling career paths and advance in your professional journey by perusing the diverse job opportunities available on our specialized employment platform.
        </h3>
      </article>

      <section className="flex flex-col items-center justify-center mt-10">
        <p className="text-gray-600 text-lg text-center mb-4 sm:mb-0 flex justify-center items-center h-16">
          What are you looking for?
        </p>
        <div className="flex flex-row ">
          <Link href="/jobs" className="p-4 text-center  text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:bg-gray-100 transition duration-300 cursor-pointer rounded-lg rounded-e-none border-r-2 hover:border-r-0 ">
            Jobs
          </Link>
          <Link href="/hiring" className="p-4 text-center  text-gray-700 hover:text-blue-700 hover:border-b-2 hover:border-blue-700 hover:bg-gray-100 transition duration-300 cursor-pointer rounded-lg rounded-s-none">
            Hire
          </Link>
        </div>
      </section>
    </main>

  )
}
