import React from 'react'

const Services = () => {
  return (
    <main className='bg-teal-100 min-h-[calc(100vh-80px)] h-full overflow-x-scroll'>
       <div>
            <div className='p-5'>
                <h1 className='text-3xl font-bold'>Our Service Schedule </h1>
                
            </div>
            <div className='p-6 bg-gray-950 mx-11 opacity-90 mb-16 shadow-lg rounded-lg relative md:float-right md:mr-6 md:ml-16 md:w-9/12'>
                <div className='flex justify-center'>
                <h1 className="text-2xl font-serif text-purple-800">Goshen City Assembly Head-branch</h1>
                </div>
                <div>
                  <ul className='p-3 gap-10 text-amber-100 font-semibold'>
                    <li>Hour of prayer =&gt; Mondays [6:15am - 7:15am]</li>
                    <li>Counseling and Deliverance =&gt; Tuesday [8:00am - 12:00pm] </li>
                    <li>Bible Study and Holy Communion Service =&gt; Wednesday [5:00pm - 7:00pm]</li>
                    <li>PUSH (Pray Until Something Happens) =&gt; Friday [5:00pm - 6:00pm]</li>
                    <li>Sunday Service =&gt; Sunday [7:30am - 10:00am ]</li>
                  </ul>

                  <p className='text-amber-100 font-semibold'>*Venue: Goshen Avenue, Ungwan-Maigero, Kaduna.</p>
                </div>
                  
            </div>

            <div className='p-6 mb-4 bg-gray-950 mx-11 opacity-90 shadow-lg rounded-lg md:float-left md:w-9/12'>
                <div className='flex justify-center'>
                <h1 className="text-2xl font-serif text-purple-800">Goshen City Assembly Narayi Branch</h1>
                </div>
                <div>
                  <ul className='p-3 gap-10 text-amber-100 font-semibold'>
                    <li>Hour of prayer =&gt; Mondays [6:15am - 7:15am]</li>
                    <li>Counseling and Deliverance =&gt; Tuesday [8:00am - 12:00pm] </li>
                    <li>Bible Study and Holy Communion Service =&gt; Wednesday [5:00pm - 7:00pm]</li>
                    <li>PUSH (Pray Until Something Happens) =&gt; Friday [5:00pm - 6:00pm]</li>
                    <li>Sunday Service =&gt; Sunday [7:30am - 10:00am ]</li>
                  </ul>

                  <p className='text-amber-100 font-semibold'>*Venue: Perry Plaza, Cinema Road, Narayi Kaduna.</p>
                </div>
                  
            </div>
       </div>
    </main>
  )
}

export default Services