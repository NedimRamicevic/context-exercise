import React,{useContext} from 'react'
import {SampleContext} from '../Contexts/sampleContext'

function ChangeName() {
    const {setName} = useContext(SampleContext)
    const changeName = (name) =>{
        setName(name)
    }
    return (
        <div>
            <button onClick={() => changeName("nedim")}  >ChangeName</button>
        </div>
    )
}

export default ChangeName
