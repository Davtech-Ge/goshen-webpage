import React from 'react'

const AboutUS = () => {
  return (
    <section className='bg-black text-white py-6 px-4'>
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center'>
            <img src='/images/aboutGosh.jpg' alt='Apostle glory helen'  className='rounded-lg w-full h-1/2 lg:h-screen mb-6 md:mb-0 md:mr-8' />
            <div className='md:w-1/2'>
                <h2 className='text-2xl font-semibold mb-4'>Christ Goshen city Assembly</h2>
                <p className='text-gray-300 mb-4'>
                Christ Goshen is a weekly Apostolic and prophetic platform where people come to experience the Word, Worship, Miracle and Love. The revelatory teachings help believers to experience true intimacy with the Holy Spirit and learn to be with Him, be like Him and Represent Him
                </p>
                <button className='border border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:text-purple-800'>
                    Learn More
                </button>
            </div>
        </div>
    </section>
  )
}

export default AboutUS