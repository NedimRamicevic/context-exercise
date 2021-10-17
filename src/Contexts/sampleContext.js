import React from 'react'

const sampleContext = React.createContext()
function SampleContextProvider({children}) {
    return (
        <sampleContext.Provider>
            {children}
        </sampleContext.Provider>
    )
}

export default SampleContextProvider
