import React,{useState,useEffect } from 'react'

const App = () => {
  const[Data,setData]=useState([{}])
  useEffect(()=>{
    fetch("./").then(
      res => res.json()).then(
        Data=>{
          setData(Data)
          console.log(Data)
        }
      )
  },[])
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Plant Disease Detection</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-amber-400 mb-8">
        Plant Disease Detection
      </h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
        <p className="text-lg mb-4">
          Plant disease detection using machine learning can be a valuable tool
          for farmers in identifying and managing crop diseases. By analyzing
          images of plants, this application can accurately classify various
          diseases and help farmers take appropriate actions to prevent the spread
          and minimize crop losses.
        </p>
        <p className="text-lg mb-4">
          Our model has been trained to detect the following diseases in plants:
        </p>
        <ul className="list-disc ml-8">
          <li>Pepper bell - Bacterial spot</li>
          <li>Pepper bell - Healthy</li>
          <li>Potato - Early blight</li>
          <li>Potato - Late blight</li>
          <li>Potato - Healthy</li>
          <li>Tomato - Bacterial spot</li>
          <li>Tomato - Early blight</li>
          <li>Tomato - Late blight</li>
          <li>Tomato - Leaf Mold</li>
          <li>Tomato - Septoria leaf spot</li>
          <li>Tomato - Spider mites Two-spotted spider mite</li>
        </ul>
        <form method="POST" encType="multipart/form-data">
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select an Image:
            </label>
            <input
              type="file"
              name="file"
              id="file"
              accept="image/*"
              required=""
              className="border border-gray-400 p-2 w-full rounded"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Predict
            </button>
          </div>
        </form>
        {"{"}% if prediction %{"}"}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Predicted Class:</h2>
          <p className="text-gray-700">
            {"{"}
            {"{"} prediction {"}"}
            {"}"}
          </p>
        </div>
        {"{"}% endif %{"}"}
      </div>
    </div>
  </>
  
  )
}

export default App

