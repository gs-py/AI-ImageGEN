
import './App.css'
import Hero from './components/Hero'
function App() {
 

  return (
    
     <section className=" h-[100dvh] flex justify-center items-center transition-all duration-1000 bg-[url('/public/background-7716491_1920.png')]">
      <div className=" h-[90vh] m-2 scroll-smooth  w-[100vw]  containerounded-lg overflow-x-clip overflow-y-hidden p-2 bg-white/25 text-white  ">
        <Hero />
        </div>
      </section>
   
  )
}

export default App
