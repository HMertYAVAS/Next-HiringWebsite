import Link from "next/link";

export default function Home() {
  return (
    <main >
      <article className="relative">
        <img src="https://images.pexels.com/photos/4342126/pexels-photo-4342126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" style={{ objectFit: "cover" }} />

        <h3 class="absolute md:text-5xl sm:text-lg text-blue-700 top-1/4 left-1/2 -translate-x-1/2">Ascend The Career Ladder With Our Opportunities</h3>
        <h3 class="absolute md:text-2xl sm:text-sm text-zinc-100 bottom-1/4 left-1/2 -translate-x-1/2">Discover compelling career paths and advance in your professional journey by perusing the diverse job opportunities available on our specialized employment platform.</h3>
      </article>
      <section className="grid  h-48 justify-center mt-10">
          <p className="text-zinc-40 text-lg ">What are you looking?</p>
          <div>
      <div class="-mt-px flex shrink-0 grow-0 divide-x divide-gray-400 max-h-max">
        <div class="flex w-0 flex-1">
          <Link className='"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-l-lg border  py-4 text-sm font-medium text-gray-700 border-gray-400 hover:border-gray-600 hover:text-blue-700 border-bt-lg"' href={"/jobs"} >
            Jobs
            </Link>
        </div>
        <div class="-ml-px flex w-0 flex-1">
        <Link className='"relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-r-lg border  py-4 text-sm font-medium text-gray-700 border-gray-400 hover:border-gray-600 hover:text-blue-700 border-bt-lg"' href={"/hiring"} >
            Hire
            </Link>
        </div>
      </div>
    </div>
      </section>
    </main>

  )
}
