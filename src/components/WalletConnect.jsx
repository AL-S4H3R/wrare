import React from 'react'

const WalletConnect = () => {
    return(
        <section className="h-full w-full px-16">
            <div className="h-full w-full flex items-center justify-center">
                <div className="w-full px-16 space-y-8">
                    <div className="flex justify-center">
                        <button className="w-1/3 border bg-gray-800 text-gray-100 p-2">Connect with Portis</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-1/3 border bg-gray-800 text-gray-100 p-2">Metamask</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-1/3 border bg-gray-800 text-gray-100 p-2">FortMatic</button>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-1/3 border bg-gray-800 text-gray-100 p-2">Arkane</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WalletConnect