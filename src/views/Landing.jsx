import React from 'react'
import Web3 from 'web3'
import Portis from '@portis/web3'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Landing = () => {
    const portis = new Portis('efa76be7-71f3-4b3f-a49a-5cccae6dfaf7', 'maticMumbai')
    const web3 = new Web3(portis.provider)

    const [wallet, setWallet] = React.useState(JSON.parse(localStorage.getItem('eth_address')))

    const connectWallet = async () => {
        try {
            var accounts = await web3.eth.getAccounts()
            console.log(accounts[0])
            setWallet(accounts[0])
            localStorage.setItem(JSON.stringify(accounts[0]))
        }
        catch(err){
            console.error(err)
        }
    }

    const portisLogout = async () => {
        await portis.logout()
    }

    return(
        <div 
            className="h-screen w-screen text-gray-800 bg-gray-100 space-y-8" 
            // style={{backgroundColor:"#fff"}}
        >
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default Landing