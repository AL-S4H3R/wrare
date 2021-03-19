import React from 'react'

const Hero = () => {

    const [value, setValue] = React.useState('')

    return(
        <section className="px-16 py-4 text-black space-y-8" style={{fontFamily:"'B612 Mono', monospace"}}>
            <div>
                <h2 className="text-center font-semibold text-2xl text-gray-700">Decentralized MarketPlace for Artists.</h2>
            </div>
            <div className="flex justify-center">
                <input 
                    type="text" 
                    className="w-1/2 py-2 px-4 rounded-full focus:outline-none shadow-md" 
                    placeholder="Search for NFT's ..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </section>
    )
}

export default Hero