import './App.css';
import Input from './Components/Input'
import ToDos from './Components/ToDos'
import Count from './Components/Count'
import {useState} from 'react'

function App() {
  const [taskVal, setTaskVal] = useState('')
  const [taskList, setTaskList] = useState([])
  const [newTaskVal, setNewTaskVal] = useState('')

  const handleTaskInput = (e) => {
    setTaskVal(e.target.value)
  }

  const handleAddTask = () => {
    if(taskVal){
      setTaskList([...taskList, {
        task:taskVal,
        isChecked: false,
        isEditable: false
      }])
      setTaskVal('')
    }else {
      alert('Enter a TAsk')
    }
  }

  const handleCB = index => {
    const myList = [...taskList]
    myList[index].isChecked = !myList[index].isChecked
    setTaskList([...myList])
  }

  const handleDEL = index => {
    const myList = [...taskList]
    myList.splice(index,1)
    setTaskList([...myList])
  }

  const handleEdit = index => {
    const myList = [...taskList]
    myList[index].isEditable = !myList[index].isEditable
    setTaskList([...myList])
  }

  const handleNewTaskInput = e => {
    setNewTaskVal(e.target.value)
  }

  const handleModify = index => {
    if(newTaskVal){
      const myList = [...taskList]
      myList.splice(index,1)
      const newTask = {
        task: newTaskVal,
        isChecked:false,
        isEditable:false
      }
      myList.splice(index, 0, newTask)
      setTaskList([...myList])
    }else{
      alert('Kindly Enter a Task')
    }
    
  }

  return (
    <div className="App">
      <h1>toDo using React Hooks</h1>
      <Count taskList={taskList}/>
      <Input 
        value={taskVal}
        handleTaskInput={e => handleTaskInput(e)}
        handleAddTask={() => handleAddTask()}
      />
      <ToDos taskList={taskList}
        handleCB={(index) => handleCB(index)}
        handleDEL={(index) => handleDEL(index)}
        handleEdit={(index) => handleEdit(index)}
        handleNewTaskInput={(e) => handleNewTaskInput(e)}
        handleModify={index => handleModify(index)}
      />
    </div>
  );
}

export default App;
