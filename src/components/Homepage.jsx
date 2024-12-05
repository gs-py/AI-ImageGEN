import { FaArrowRight, FaFileContract } from "react-icons/fa"
import { FaWandMagicSparkles } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

const Homepage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/Image-gen')
  }
  const handleText = () => {
    navigate('/text-summarise')
  }
  return (
   <section className=" h-[100dvh] flex justify-center items-center transition-all duration-1000 bg-[#4335A7]">
     
          <div className=" h-[90vh] m-2 scroll-smooth  w-[100vw]  container bg-[#FFF6E9] rounded-lg overflow-x-clip overflow-y-hidden p-2 text-white  flex justify-center items-center flex-col ">
            
              <div className=" text-[#FF7F3E] w-full flex justify-center">Hlo GUys</div>
              
              <div className=" flex  justify-center items-center flex-nowrap gap-3">
                  
                  <div className=" w-[40dvw] bg-[#80C4E9] rounded-lg h-[35dvh] flex justify-evenly flex-col  gap-2 p-2  flex-nowrap text-pretty items-stretch hover:scale-95 transition-all duration-400 anima ">
                      
                      <h4 className=" flex flex-nowrap gap-3 items-center">  <FaWandMagicSparkles className="text-violet-500 text-pretty text-center" />Image Generator</h4>
                      <p>Transforms Your ideas into stunning visuals with our AI-powered image generation tool</p>
                      <p className=" flex  items-center flex-nowrap gap-2 text-violet-700 underline cursor-pointer w-fit" onClick={handleClick}>Try Now <FaArrowRight   className=" tra"/></p>
                  </div>
                 
                  <div className=" w-[40dvw] bg-[#80C4E9] rounded-lg h-[35dvh] flex justify-evenly flex-col gap-2 p-2 items-stretch hover:scale-95 transition-all duration-400  anima"> 
                      <h4 className=" flex flex-nowrap gap-3 items-center "><FaFileContract className=" text-violet-500" />
                          Text Summariser
                      </h4>
                      <p>Instantly condense lenghty content into clear , concise summaires</p>
                      <p className=" flex  items-center flex-nowrap gap-2 text-violet-700  underline cursor-pointer w-fit"  onClick={handleText}>Try Now <FaArrowRight  className=" tra"/></p>
                  </div>

                </div>

              </div>
              </section>
  )
}

export default Homepage