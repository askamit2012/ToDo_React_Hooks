import React from 'react'

function index(props) {
    const myList = props.taskList
    let remainingTasks = 0, finishedTasks = 0
    myList.forEach(task => {
        task.isChecked ? finishedTasks++ : remainingTasks++
    })
    return (
        <div>
            {
                remainingTasks 
                ?
                <div>
                    <h4>Remaining Tasks: <strong>{remainingTasks}</strong></h4>
                </div>
                :
                <></>
            }
            {
                finishedTasks
                ?
                <div>
                    <h4>Finished Tasks: <strong>{finishedTasks}</strong></h4>
                </div>
                :
                <></> 
            }
        </div>
    )
}

export default index
