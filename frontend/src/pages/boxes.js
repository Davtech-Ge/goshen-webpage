import React from 'react'
import { Link } from 'react-router-dom'

const Boxes = () => {
    const boxes = [
        <Messages />
    ]
  return (
    <div className='w-screen mx-auto overflow-x-auto'>
        <div className='flex space-x-4 min-w-[800px] p-4'>
            {boxes.map((box, index) => (
                <div 
                key={index}
                className='flex-shrink-0 w-80 h-56 bg-teal-200 text-black flex items-center justify-center text-2xl font-bold rounded-lg shadow-xl shadow-gray-700'>
                   {box}
                </div>
            ))}
        </div>
    </div>
  )
}

const Messages = () => {
    return (
        <div className='messages flex justify-center items-center flex-col rounded-xl'>
            <h1 className='text-white text-2xl flex mt-24'>Listen to our Messages</h1>
            <button className='flex border rounded-full bg-purple-900 border-black p-4 shadow-lg shadow-black text-white'>
                <Link to={"/messages"}>Go</Link>
            </button>
        </div>
    )
}

export default Boxes