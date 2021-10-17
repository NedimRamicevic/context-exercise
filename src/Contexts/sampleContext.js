import React, {useState} from 'react'

export const SampleContext = React.createContext()

function SampleContextProvider({children}) {

    const [name, setName] = useState("Naber")


    return (
        <SampleContext.Provider value = {{name , setName}}>
            {children}
        </SampleContext.Provider>
    )
}

export default SampleContextProvider
