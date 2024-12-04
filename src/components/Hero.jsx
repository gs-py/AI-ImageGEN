import React, { useState } from 'react'

const Hero = () => {
    const [image, setImage] = useState(null); // State to store the image
  const [inputText, setInputText] = useState(""); // State to store user input
    const [animate ,setanimate] = useState(false)
    const query = async (data) => {
        const apiKey = process.env.REACT_APP_HF_API_KEY
        console.log(apiKey)
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    return result;
  };

    const generateImage = async () => {
      setImage(null)
    if (!inputText.trim()) {
      alert("Please enter a prompt for the model.");
      return;
      }
      setanimate(true)
    const blob = await query({inputs: inputText});
      const imageUrl = URL.createObjectURL(blob);
      setanimate(false)
    setImage(imageUrl); // Update the state with the image URL
  };


    return (
        <div className=' w-full h-full  flex justify-center items-center  flex-col sm:flex-row'> 
            <div className='  w-[50%] h-full flex justify-center items-center flex-col gap-2'>
                <h1 className=' text-2xl text-pretty  font-medium'>Free Online AI Image Generator</h1>
                <h4 className=' w-[80%] text-center  text-yellow-400 text-sm text-pretty hidden sm:block'>Dream it up, then add it to your design. Watch your words and phrases transform into beautiful images with the best AI image generators available at your fingertips. Stand out with an image perfect for your project.</h4>
               
                <div className='flex justify-center items-center gap-5 m-4 '>

                    <input className=' rounded-lg outline text-black p-1 border' type="text"   value={inputText}
                        onChange={(e) => setInputText(e.target.value)} 
                        placeholder='Enter a prompt' />
                    <button className='rounded-lg    p-2 bg-[#778da9]' onClick={generateImage}>Generate</button>
                </div>
            </div>
            
            <div className=' bg-white/10  sm:w-[50%] w-full  rounded-lg m-2 h-full flex items-center justify-center'>
               
                {animate &&  <div className='flex justify-center items-center'><div className="spinner">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div></div> }
                {image && <img src={image} alt="Generated" />}
             </div>
      </div>
  )
}

export default Hero