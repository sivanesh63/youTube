import React from "react"
import { FaYoutube } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function App() {
  const [URL, setURL] = useState("")

  const handleInput = (e) => {
    e.preventDefault()

    setURL(e.target.value)
  }

  const downloadVideo = async (e) => {
    e.preventDefault()

    const options = {
      method: 'GET',
      url: 'https://youtube-data8.p.rapidapi.com/video/streaming-data/',
      params: {id: URL},
      headers: {
        'x-rapidapi-key': 'dcf67b0885mshb575ab13e81274dp19a061jsn8e8685fd7dd8',
        'x-rapidapi-host': 'youtube-data8.p.rapidapi.com',
        'content-type': 'application/json'
      }
    };

    try {
      const rspn = await axios.request(options)
      console.log(rspn?.data?.formats[Number(0)]?.url)
      window.location.href = rspn?.data?.formats[Number(0)]?.url
    } catch (error) {
      console.log(error)
    }
  }



  console.log(URL)

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col bg-slate-200">
      <div  className="flex items-center justify-center gap-x-2">
        {/* Youtube logo, text */}
        <FaYoutube size={60} className="text-red-600"/>
        <p className="text-2xl font-bold text-red-400">
          Video Downloader
        </p>
      </div>

      <div className="flex items-center justify-center gap-x-2">
        <input type="url" className="h-10 w-96 border-none outline-none px-5 rounded-lg shadow-lg" onChange={handleInput}/>
        <button className="h-10 bg-slate-600 text-white px-2 rounded-lg border-none outline-none" onClick={downloadVideo}>Download</button>
      </div>
    </div>
  )
}

export default App