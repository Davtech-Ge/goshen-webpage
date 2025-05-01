import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LatestFeatures = () => {

    const [selectedButton, setSelectedButton] = useState(null);
    const handleClick = (buttonId) => {
        setSelectedButton(buttonId)
    };

return (
    <section className='bg-black text-white py-4 px-4'>
            <div className='max-w-5xl mx-auto relative'>
                    <h1>Latest Feature</h1>
                    <div>
                            {
                                    selectedButton === null && (
                                            <MessageIcon 
                                                    picture={'/images/watchLive.jpg'}
                                                    pTag={'Keys to The Supernatural'}
                                                    HTag={'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'}
                                                    Buttontag={'Watch Now'}
                                                    />
                                    )
                            }
                             {
                                    selectedButton === 1 && (
                                            <MessageIcon 
                                            picture={'/images/watchLive.jpg'} 
                                            pTag={'Keys to The Supernatural'}
                                            HTag={'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'}
                                            Buttontag={'Watch Now'}
                                            />
                                    )
                            }
                             {
                                    selectedButton === 2 && (
                                            <MessageIcon 
                                            picture={'/images/externalminis.jpg'} 
                                            pTag={'Keys to the Supernatural by Apostle Glory Helen Ikeleji during the Goshen Sunday Service'}
                                            HTag={'Watch us Live'}
                                            Buttontag={'Watch Now'}
                                            />
                                    )
                            }
                             {
                                    selectedButton === 3 && (
                                            <MessageIcon 
                                            picture={'/images/giving.jpg'} 
                                            pTag={'Sow your seeds, tithes and Offering'}
                                            HTag={'Giving'}
                                            Buttontag={'See Details'}
                                            />
                                    )
                            }
                    </div>
                         

                    <div className='lg:absolute lg:top-1/4 lg:left-4 grid lg:grid-cols-1 grid-cols-3 gap-4 text-center'>
                            <button onClick={() => handleClick(1)} className='bg-gray-800 lg:py-4 py-2 lg:px-4 px-3 rounded'>
                                    <div className='text-2xl mb-2'><FontAwesomeIcon icon='fa-solid fa-up-from-line' /></div>
                                    <h4 className='text-lg font-semibold'>Featured Sermon</h4>
                                    <p className='text-gray-400 text-sm'>APOSTLE GLORY HELEN IKELEJI</p>
                            </button>

                            <button onClick={() => handleClick(2)} className='bg-gray-800 lg:py-4 py-2 lg:px-4 px-3 rounded'>
                                    <div className='text-2xl mb-2'><FontAwesomeIcon icon='fa-solid fa-up-from-line' /></div>
                                    <h4 className='text-lg font-semibold'>Watch us LIVE</h4>
                                    <p className='text-gray-400 text-sm'>CHRIST GOSHEN EXPERIENCE</p>
                            </button>

                            <button onClick={() => handleClick(3)} className='bg-gray-800 py-6 px-4 rounded'>
                                    <div className='text-2xl mb-2'><FontAwesomeIcon icon='fa-solid fa-up-from-line' /></div>
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
        <div className='rounded-lg overflow-hidden w-full h-3/4 lg:h-screen shadow-lg mb-6'>
                <div className='relative w-full h-1/2'>
                <img src={picture} alt='livestream' className='w-full h-full' />
                </div>

                <div className=' absolute bottom-0 bg-gray-900 p-4'>
                    <h3 className='text-xl font-semibold'>{HTag}</h3>
                    <p className='text-gray-400 mt-2'>
                        {pTag}
                    </p>
                    <button className='mt-4 border border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:text-purple-800'>
                        {Buttontag}
                    </button>
                </div>
            </div>
    )
}
export default LatestFeatures