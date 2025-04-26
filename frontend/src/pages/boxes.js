import React from 'react'
import { Link } from 'react-router-dom'

const Boxes = () => {
    const boxes = [
        <Messages background={'messages'} heading={"Listen to our Messages"} action={"Go"} link={"/messages"}/>,
        <Messages background={'seed'} heading={"Sow a seed"} action={"seed"} link={"/messages"}/>,
        <Messages background={'fellowship'} heading={"Join our Fellowship"} action={"join"} link={"/messages"}/>,
    ]
  return (
    <div className='w-screen mx-auto overflow-x-auto'>
        <div className='flex space-x-4 min-w-[800px] p-4'>
            {boxes.map((box, index) => (
                <div 
                key={index}
                className='flex-shrink-0 w-72 h-96 bg-teal-200 text-black flex items-center justify-center text-2xl font-bold rounded-lg shadow-lg shadow-black'>
                   {box}
                </div>
            ))}
        </div>
    </div>
  )
}

const Messages = ({heading, action, link, background}) => {
    return (
        <div className={`${background} messages flex justify-center items-center flex-col rounded-xl`}>
            <h1 className='text-white text-2xl flex mt-24'>{heading}</h1>
            <button className='flex border rounded-full bg-purple-900 border-black p-4 shadow-lg shadow-black text-white'>
                <Link to={link}>{action}</Link>
            </button>
        </div>
    )
}

export default Boxes