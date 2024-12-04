import React, { useState } from "react";

const HuggingFaceImageGenerator = () => {
  const [image, setImage] = useState(null); // State to store the image
  const [inputText, setInputText] = useState(""); // State to store user input

  const query = async (data) => {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large",
      {
        headers: {
          Authorization: "Bearer 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",
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
    if (!inputText.trim()) {
      alert("Please enter a prompt for the model.");
      return;
    }
    const blob = await query({inputs: inputText});
    const imageUrl = URL.createObjectURL(blob);
    setImage(imageUrl); // Update the state with the image URL
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update inputText on change
        placeholder="Enter a prompt, e.g., 'Astronaut riding a horse'"
      />
      <button onClick={generateImage}>Generate Image</button>
      {image && <img className=" rounded-lg p-4" src={image} alt="Generated"  />}
    </div>
  );
};

export default HuggingFaceImageGenerator;
