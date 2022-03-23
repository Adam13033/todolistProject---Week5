
   
import React, { useState } from "react"

export const MyForm = ({ handleForm }) => {
  const [userInput, setUserInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    handleForm(userInput)
    setUserInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter a task!" type="text" onChange={(event) => setUserInput(event.target.value)} value={userInput} />
      <button className="submit" type="submit">Submit</button>
    </form>
  )
}

export default MyForm;