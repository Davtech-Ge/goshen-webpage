import React from 'react'
import { BsArrowUp } from 'react-icons/bs'

const LatestFeatures = () => {

    const [selectedButton, setSelectedButton] = useState(null);
    const handleClick = (buttonId) => {
        setSelectedButton(buttonId)
    };

  return (
    <section className='bg-black text-white py-10 px-4'>
        <div className='max-w-5xl mx-auto'>
            <h1>Latest Feature</h1>
            <div>
                {
                    selectedButton === null && (
                        <MessageIcon 
                            picture={'../logo/watchLive.jpg'}
                            pTag={'Keys to The Supernatural'}
                            HTag={'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'}
                            Buttontag={'Watch Now'}
                            />
                    )
                }
                 {
                    selectedButton === 1 && (
                        <MessageIcon 
                        picture={'../logo/watchLive.jpg'} 
                        pTag={'Keys to The Supernatural'}
                        HTag={'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'}
                        Buttontag={'Watch Now'}
                        />
                    )
                }
                 {
                    selectedButton === 2 && (
                        <MessageIcon 
                        picture={'../logo/watchLive.jpg'} 
                        pTag={'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'}
                        HTag={'Watch us Live'}
                        Buttontag={'Watch Now'}
                        />
                    )
                }
                 {
                    selectedButton === 3 && (
                        <MessageIcon 
                        picture={'../logo/watchLive.jpg'} 
                        pTag={'Sow your seeds, tithes and Offering'}
                        HTag={'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'}
                        Buttontag={'See Details'}
                        />
                    )
                }
            </div>
               

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
                <button onClick={() => handleClick(1)} className='bg-gray-800 py-6 px-4 rounded'>
                    <div className='text-2xl mb-2'><BsArrowUp /></div>
                    <h4 className='text-lg font-semibold'>Featured Sermon</h4>
                    <p className='text-gray-400 text-sm'>APOSTLE GLORY HELEN IKELEJI</p>
                </button>

                <button onClick={() => handleClick(2)} className='bg-gray-800 py-6 px-4 rounded'>
                    <div className='text-2xl mb-2'><BsArrowUp /></div>
                    <h4 className='text-lg font-semibold'>Watch us LIVE</h4>
                    <p className='text-gray-400 text-sm'>CHRIST GOSHEN EXPERIENCE</p>
                </button>

                <button onClick={() => handleClick(3)} className='bg-gray-800 py-6 px-4 rounded'>
                    <div className='text-2xl mb-2'><BsArrowUp /></div>
                    <h4 className='text-lg font-semibold'>Give</h4>
                    <p className='text-gray-400'>SEED, TITHES, OFFERINGS</p>
                </button>
            </div>
        </div>
    </section>
  )
}
const MessageIcon = ({picture, pTag, HTag, Buttontag}) => {
    return (
        <div className='rounded-lg overflow-hidden shadow-lg mb-6'>
                <img src={picture} alt='livestream' className='w-full' />

                <div className='bg-gray-900 p-4'>
                    <h3 className='text-xl font-semibold'>{HTag}</h3>
                    <p className='text-gray-400 mt-2'>
                        {pTag}
                    </p>
                    <button className='mt-4 border border-yellow-500 text-yellow-500 px-4 py-2 rounded-full hover:text-black'>
                        {Buttontag}
                    </button>
                </div>
            </div>
    )
}
export default LatestFeatures