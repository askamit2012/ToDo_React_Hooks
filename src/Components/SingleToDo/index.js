import React from 'react'
import EtoDo from '../EditableToDo'
import './index.css'

function index(props) {
    const task = props.task
    const index = props.index
    return (
        <div className='singleToDo'>
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
                <div style={{textDecoration: 'line-through'}} className='singleTask'>
                    <input type='checkbox'  onChange={() => props.handleCB(index)} checked={task.isChecked} className='cb'/>
                    <span>{task.task}</span>
                    <button onClick={() => props.handleEdit(index)}>EDIT</button>
                    <button onClick={() => props.handleDEL(index)}>DEL</button>
                </div>
                :
                <>
                    <div className='singleTask'>
                        <input type='checkbox'  onChange={() => props.handleCB(index)} checked={task.isChecked} className='cb'/>
                        <span>{task.task}</span>
                        <button onClick={() => props.handleEdit(index)}>EDIT</button>
                        <button onClick={() => props.handleDEL(index)}>DEL</button>
                    </div>
                </>
            }
            
        </div>
    )
}

export default index
