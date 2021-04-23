import React, {useRef, useEffect} from 'react'
import './index.css'

function Index(props) {
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    return (
        <div className='inputDiv'>
            <input onChange={e => props.handleTaskInput(e)} value={props.value} ref={inputRef} placeholder='Enter any Task to Save ...'/>
            <button onClick={() => props.handleAddTask()}>Add TAsk</button>
        </div>
    )
}

export default Index
