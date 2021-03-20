import React from 'react'
import { storageBucket } from '../config/firebase'
import Wrare from '../contracts/Wrare.json';
import Portis from '@portis/web3'
import Web3 from 'web3'

const UploadToken = () => {

    const [name, setName] = React.useState('')
    const [symbol, setSymbol] = React.useState('')
    const [link, setLink] = React.useState('')
    const [web3, setWeb3] = React.useState()

    const connectWallet = async () => {
        const portis = new Portis('efa76be7-71f3-4b3f-a49a-5cccae6dfaf7', 'maticMumbai')
        const web3 = new Web3(portis.provider)
        setWeb3(web3)
        const accounts = await web3.eth.getAccounts()
        console.log(accounts[0])
    }

    const createJsonData = async (filename, jsonData) => {
        try {
            var res = await storageBucket.child(`metadata/${filename}.json`).putString(jsonData)
            console.log(res)
        }
        catch(err){
            console.error(err)
        }
    }

    const uploadJsonData = async (
        name,
        symbol,
        link
    ) => {
        await connectWallet()
        var metadata = { name, symbol, image: link}
        const jsonERC = JSON.stringify(metadata)
        console.log(jsonERC)
        createJsonData(`${name}${symbol}.wrare`, jsonERC)
    }

    return(
        <section className="px-16 py-4">
            <div className="flex justify-center space-x-8">
                <div style={{fontFamily:"'Anonymous Pro', monospace"}} className="space-y-8">
                    <h1 className="font-bold text-gray-800 text-4xl text-center">
                        Upload your art.
                    </h1>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="" className="ml-2 text-lg">Enter IPFS Link of your ART</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 shadow" 
                                placeholder="https://www.ipfs.io/your-image-code"
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="ml-2 text-lg">Name your masterpiece!</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 shadow" 
                                placeholder="My Mona Lisa"
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="ml-2 text-lg">Symbolize your art!</label>
                            <input 
                                type="text" 
                                className="w-full px-4 py-2 shadow" 
                                placeholder="MLisa2"
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="ml-2 text-lg">Asking Price (in ETH)</label>
                            <input 
                                type="number" 
                                className="w-full px-4 py-2 shadow" 
                                placeholder="100 ETH"
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="ml-2 text-lg">Royalties</label>
                            <input 
                                type="number" 
                                className="w-full px-4 py-2 shadow" 
                                placeholder="eg: 10%"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button 
                                className="bg-gray-800 w-full hover:bg-gray-700 text-semibold text-gray-100 p-2 uppercase"
                                onClick={() => {
                                    uploadJsonData("Doggie", "DOG", "https://localhost:3000/dog.jpg")
                                }}
                            >
                                Generate NFT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UploadToken