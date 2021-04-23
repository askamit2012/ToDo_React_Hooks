import React from 'react'
import SingleToDo from '../SingleToDo'

function index(props) {
    const taskList = props.taskList
    return (
        <div>
            {
                taskList.map((task,index) => <SingleToDo 
                key={index}                                    
                task={task}
                index={index}
                handleCB={() => props.handleCB(index)}
                handleDEL={() => props.handleDEL(index)}
                handleEdit={() => props.handleEdit(index)}
                handleNewTaskInput={(e) =>props.handleNewTaskInput(e)}
                handleModify={() => props.handleModify(index)}
                />)
            }
            
        </div>
    )
}

export default index
