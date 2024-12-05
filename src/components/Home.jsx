import React from 'react'
import Hero from './Hero'

const Home = () => {
  return (
       <section className=" h-[100dvh] flex justify-center items-center transition-all duration-1000 bg-[url('/smoke-376543_1920.jpg')]">
     
      <div className=" h-[90vh] m-2 scroll-smooth  w-[100vw]  containe rounded-lg overflow-x-clip overflow-y-hidden p-2 bg-white/5 text-white  ">
      <Hero/>
        </div>
      </section>
  )
}

export default Home