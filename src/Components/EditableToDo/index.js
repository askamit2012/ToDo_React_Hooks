import React from 'react'

function index(props) {
    return (
        <div>
           <input onChange={e => props.handleNewTaskInput(e)} placeholder={props.task.task}/>
           <button onClick={() => props.handleModify(props.index)}>Modify</button>
           <button onClick={() => props.handleDEL(props.index)}>DEL</button>
        </div>
    )
}

export default index
