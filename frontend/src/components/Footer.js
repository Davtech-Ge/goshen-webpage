import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className='bg-gray-800 text-black font-serif font-bold justify-center flex items-center h-10'> 
        <div>
        <h2 className='cursor-pointer text-teal-100' title='Raising and liberating the destinies of men'>Christ Goshen City Assembly Worldwide &copy; {date}</h2>
        </div>
    </footer>
  )
}

export default Footer