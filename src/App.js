import React, { useState } from "react"
import MyForm from "./Components/myForm"
import Container from "./Components/formContainer"
import "./App.css"


const App = () => {
  const [list, setList] = useState([])

  const handleForm = (item) => {
    setList([...list, { value: item, complete: false }])
  }

  const handleRemove = (index) => {
    let tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)
  }

  const handleComplete = (index) => {
    let tempList = [...list]
    
    tempList[index].complete = !tempList[index].complete
    
    setList(tempList)
  }

  return (
    <div className="background">
      <h1>To-Do List</h1>
      <MyForm handleForm={handleForm} />
      <Container list={list} handleRemove={handleRemove} handleComplete={handleComplete} />
    </div>
  )
}

export default App;