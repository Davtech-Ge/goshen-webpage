import React from 'react'

const Services = () => {
  return (
    <main className=' min-h-[calc(100vh-80px)] background'>
       <section className='min-h-screen flex flex-col md:flex-row bg-zinc-900 text-white'>
          <div className='md:w-1/2 w-full h-64 md:h-auto'>
          <img src='/images/reachout.png' alt='Apostle Helen Glory Ikeleji'
          className='w-full h-full object-cover'
          />
          </div>

          <div className='md:w-1/2 w-full flex items-center justify-center p-10'> 
            <div>
              <h2>About Apostle Glory Helen Ikeleji - The Deborah of Our Time</h2>
              <p> Apostle Glory Helen Ikeleji is a fiery woman of God, a dynamic preacher, prophetic voice, and bestselling author to this generation. With over 17 years of ministry experience, she carries a divine mandate to deliver the oppressed, restore destinies, and raise a godly army that impacts the world for Christ.</p><br />

              <p>From the tender age of 7, Apostle Glory began experiencing profound revelation and personal encounters with Jesus. What started as a prayer and counsel for family and neighbors blossomed into a powerful ministry that has touched millions worldwide. Like the biblical Deborah, she fears no battle when it comes to obeying God's instruction, her unwavering faith and boldness inspire countless souls✍️.</p>
            </div>
          </div>
       </section>

       <section className='min-h-screen flex flex-col md:flex-row bg-black text-white'>
       <div className='md:w-1/2 w-full flex items-center justify-center p-10'> 
            <div>
              <h2>About Apostle Glory Helen Ikeleji - <br /> The Deborah of Our Time</h2>
              <p>From the tender age of 7, Apostle Glory began experiencing profound revelation and personal encounters with Jesus. What started as a prayer and counsel for family and neighbors blossomed into a powerful ministry that has touched millions worldwide. Like the biblical Deborah, she fears no battle when it comes to obeying God's instruction, her unwavering faith and boldness inspire countless souls✍️.</p>
            </div>
          </div>

          <div className='md:w-1/2 w-full h-64 md:h-auto'>
          <img src='/images/reachout.png' alt='Apostle Helen Glory Ikeleji'
          className='w-full h-full object-cover'
          />
          </div>

       </section>
    </main>
  )
}

export default Services