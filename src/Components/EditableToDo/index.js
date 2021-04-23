import React, {useRef} from 'react'

function Index(props) {
    const inputRef = useRef()
    // const focusInput = () => {
    //     inputRef.current.focus()
    //     console.log('Focus Modify')
    // }
    return (
        <div>
           <input onChange={e => props.handleNewTaskInput(e)} placeholder={props.task.task} ref={inputRef}/>
           <button onClick={() => props.handleModify(props.index) }>Modify</button>
           <button onClick={() => props.handleDEL(props.index)}>DEL</button>
        </div>
    )
}

export default Index
