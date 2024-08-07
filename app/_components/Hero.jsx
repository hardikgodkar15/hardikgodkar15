import React from 'react'

function Hero() {
  return (
    <section className="bg-black">
      <div className='flex items-baseline justify-center pt-20'>
        <h2 className='text-white border px-3 p-2 rounded-full border-white text-center'>See what's New |  <span className='text-sky-400'>Services by us</span></h2>
      </div>
  <div className="mx-auto max-w-screen-xl text- px-4 py-12 lg:flex lg:h-screen ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl text-sky-300 font-extrabold sm:text-5xl">
      Find Home
        <strong className="font-extrabold text-white sm:block"> Service/Repair near you </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-slate-200">
      Explore best home services & repair near you
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-white text-black px-12 py-3 text-sm font-medium Sshadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          learn more
        </a>

        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero