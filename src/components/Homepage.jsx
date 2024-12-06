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
   <section className=" h-[100dvh] flex justify-center items-center transition-all duration-1000 bg-[url('/3d-render-modern-background-with-flowing-cyber-dots-design.jpg')] bg-cover">
     
          <div className=" h-[90vh] m-2 scroll-smooth  w-[100vw]  container  rounded-lg overflow-x-clip overflow-y-hidden p-2 text-white  flex justify-center items-center flex-col ">
            
              <div className=" text-[#FF7F3E] w-full flex justify-center">Hlo GUys</div>
              
              <div className=" flex  justify-evenly  w-full items-center flex-nowrap gap-5 ">
                  
                  <div className=" w-[35dvw] sm:w-[30dvw] bg-[#80C4E9]/20  rounded-lg sm:h-[35dvh] h-[25dvh] flex justify-evenly flex-col  gap-2 p-4 flow1 flex-nowrap  text-pretty items-stretch hover:scale-95 transition-all duration-400 anima  min-h-fit ">
                      
                      <h4 className=" flex flex-nowrap gap-3 items-center">  <FaWandMagicSparkles className="text-violet-500 sm:text-pretty   text-center text-nowrap" />Image Generator</h4>
                      <p className="sm:block hidden">Transforms Your ideas into stunning visuals with our AI-powered image generation tool</p>
                      <p className=" flex  items-center flex-nowrap gap-2 underline cursor-pointer w-fit" onClick={handleClick}>Try Now <FaArrowRight   className=" tra"/></p>
                  </div>
                 
                  <div className=" w-[35dvw] sm:w-[30dvw] bg-[#80C4E9]/30 rounded-lg sm:h-[35dvh] h-[25dvh] flow flex justify-evenly flex-col gap-2 p-4 min-h-fit  items-stretch hover:scale-95 transition-all duration-400  anima"> 
                      <h4 className=" flex flex-nowrap gap-3 items-center "><FaFileContract className=" text-violet-500" />
                          Text Summariser
                      </h4>
                      <p className="sm:block hidden">Instantly condense lenghty content into clear , concise summaires</p>
                      <p className=" flex  items-center flex-nowrap gap-2  underline cursor-pointer w-fit"  onClick={handleText}>Try Now <FaArrowRight  className=" tra"/></p>
                  </div>

                </div>

              </div>
              </section>
  )
}

export default Homepage