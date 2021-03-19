import React from 'react'

const Navbar = () => {
    return(
        <nav className="flex px-16 py-4 items-center justify-between">
            <div>
                <h1 className="font-bold font-mono text-3xl">WRAR3</h1>
            </div>
            <div className="flex space-x-8 items-center" style={{fontFamily:"'Space Mono', monospace"}}>
                <p className="bg-gray-900 p-2 text-gray-200"><a href="/">Connect</a></p>
                <p className="tracking-tighter text-gray-800 hover:underline">
                    <a href="/">My Account</a>
                </p>
            </div>
        </nav>
    )
}

export default Navbar