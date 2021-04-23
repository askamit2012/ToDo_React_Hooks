import React from 'react'

function index(props) {
    return (
        <div>
            <input onChange={e => props.handleTaskInput(e)} value={props.value}/>
            <button onClick={() => props.handleAddTask()}>Add TAsk</button>
        </div>
    )
}

export default index
