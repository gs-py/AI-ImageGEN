import CountUp from 'react-countup';
const Fast= () => {
  return (
    <div className=" font-bold">


      <h1 className=" mx-auto w-full  text-amber-500 text-center flex  justify-center">Gladwin Santhosh</h1>
      <div className=" gap-3">
        
        <div className="flex justify-between  items-center w-[60vw]">
          <h1 className="  text-3xl   text-cyan-500 ">Expense</h1>
           <CountUp className='text-3xl text-fuchsia-500' end={45454} duration={10} delay={1} />
        </div>


        <div className=" flex justify-between w-[60vw]">
          <h1 className=" text-3xl text-cyan-500">Liabalities</h1>
           <CountUp className='text-3xl text-fuchsia-500' end={45454} duration={3} delay={1} />
        </div>


        <div className=" flex justify-between w-[60vw]">
          <h1 className=" text-3xl text-cyan-500">Income</h1>
          <CountUp className='text-3xl text-fuchsia-500' end={45454} duration={3} delay={1} />
          
        </div>
        <div>
          <h1>fdfsff</h1>
          <div>
            <div className='view'>
              <div className="block bg-green">fdfd</div>
              <div className="block bg-red-200 w-20">dfdf</div>
              <div className="block">fdf</div>
              <div className="block">fdf</div>
              <div className="block">dfd</div>
              <div className="block">fdf</div>
              <div className="block">fdf</div>
              <div className="block bg-red-200 w-20">fdf</div>
              <div className="block bg-red-200 w-20">fdfd</div>
              <div className="block bg-yellow-400 w-32">Gladwin</div>
            </div>
          </div>
        </div>
      </div>





    </div>
  )
}

export default Fast