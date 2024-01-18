import JobStick from "./JobStick";

export default function JobsPage() {
    return (
      <>
      <h1 className="flex justify-center pt-10 text-2xl text-blue-600">Jobs List</h1>
      <hr class="w-48 h-1 mx-auto my-1 bg-gray-200 border-0 rounded-full md:my-1 dark:bg-gray-800"/>
      <main className=" grid grid-cols-1 justify-items-center bg-white pt-10">
        <div className=" box-border  border-e-4 border-s-4 border-t-2 border-b-2 grow w-5/6 rounded-xl">
        {
          Array.from({ length: 5 }).map((_, index) => (
            <JobStick key={index} />
          ))
        }
                    
        </div>
      </main>
  
            </>
      )
  }