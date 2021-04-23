import React from 'react'
import './index.css'

function index(props) {
    const myList = props.taskList
    let remainingTasks = 0, finishedTasks = 0
    myList.forEach(task => {
        task.isChecked ? finishedTasks++ : remainingTasks++
    })
    return (
        <div className='count'>
            {
                remainingTasks 
                ?
                <div className='remTasks'>
                    <h4>Remaining Tasks: <strong>{remainingTasks}</strong></h4>
                </div>
                :
                <></>
            }
            {
                finishedTasks
                ?
                <div className='finTasks'>
                    <h4>Finished Tasks: <strong>{finishedTasks}</strong></h4>
                </div>
                :
                <></> 
            }
        </div>
    )
}

export default index
