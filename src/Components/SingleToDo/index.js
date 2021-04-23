import React from 'react'
import EtoDo from '../EditableToDo'

function index(props) {
    const task = props.task
    const index = props.index
    return (
        <div>
            {
                task.isEditable
                ?
                <EtoDo task={task}
                index={index}
                handleDEL={() => props.handleDEL(index)}
                handleNewTaskInput={(e) => props.handleNewTaskInput(e)}
                handleModify={() => props.handleModify(index)}
                />
                :
                task.isChecked
                ?
                <div style={{textDecoration: 'line-through'}}>
                    <input type='checkbox'  onChange={() => props.handleCB(index)} checked={task.isChecked}/>
                    <span>{task.task}</span>
                    <button onClick={() => props.handleEdit(index)}>EDIT</button>
                    <button onClick={() => props.handleDEL(index)}>DEL</button>
                </div>
                :
                <>
                    <input type='checkbox'  onChange={() => props.handleCB(index)} checked={task.isChecked}/>
                    <span>{task.task}</span>
                    <button onClick={() => props.handleEdit(index)}>EDIT</button>
                    <button onClick={() => props.handleDEL(index)}>DEL</button>
                </>
            }
            
        </div>
    )
}

export default index
