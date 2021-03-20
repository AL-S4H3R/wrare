import React from 'react'
import Navbar from '../components/Navbar'
import WalletConnect from '../components/WalletConnect'

const ConnectPage = () => {
    return(
        <div className="overflow-hidden bg-gray-100 text-gray-800 h-screen w-screen">
            <Navbar/>
            <div className="h-full w-full">
                <WalletConnect/>
            </div>
        </div>
    )
}

export default ConnectPage