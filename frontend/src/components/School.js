const School = () => {
    return (
        <section className="bg-black text-white py-3 px-4">

            <div className="relative w-full h-3/4 md:h-screen ">
                <img src='/images/GoshenSChool.jpg' alt="goshen school" className=" w-full h-full object-cover" />
                <h1 className="absolute top-0 left-0 p-5 text-xl font-semibold text-gray-400">GSOM</h1>
            
            <div className=' absolute bottom-0 left-0 mt-12 text-white'>
                <h1 className="text-gray-400 text-sm">Goshen School of Ministry</h1>
                <p className="text-xs text-gray-400">The Goshen School of Ministry (GSOM) is a programme organised by Christ Goshen City with the vision of raising kingdom ambassadors to transform the society. We seek to raise, train and equip kingdom ambassadors who will represent Christ and His agenda in any/every sphere of influence they find themselves</p>

                <button className="text-purple-600 border border-purple-600 rounded-full hover:bg-purple-700">
                    REGISTER
                </button>
            </div>
            </div>
        </section>
    )
}

export default School