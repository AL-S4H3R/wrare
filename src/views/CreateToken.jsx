import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import UploadToken from '../components/UploadToken'

const CreateToken = () => {
    return(
        <div className="h-screen w-screen bg-gray-100 space-y-8 overflow-x-hidden">
            <Navbar />
            <UploadToken/>
            <Footer/>
        </div>
    )
}

export default CreateToken