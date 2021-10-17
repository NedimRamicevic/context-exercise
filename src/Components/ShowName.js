import React, {useContext} from 'react'
import {SampleContext} from '../Contexts/sampleContext'


function ShowName() {
    const {name} = useContext(SampleContext)

    return (
        <div>
            <p>
                {name}
            </p>
        </div>
    )
}

export default ShowName
