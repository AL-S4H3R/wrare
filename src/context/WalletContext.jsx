import React from 'react'

const WalletContext = React.useContext()

export const useWallet = () => {
    return React.useContext(WalletContext)
}

const WalletContextProvider = ({children}) => {
    const values = {}
    return(
        <WalletContext.Provider value={values}>
            {children}
        </WalletContext.Provider>
    )
}

export default WalletContextProvider