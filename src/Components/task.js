import React from "react"

export const Task = ({ item, remove, complete }) => {
  return (
    <li className={item.complete ? "complete" : "incomplete"}>
      <h4>{item.value}</h4>
      <button onClick={remove}>Remove</button>
      <button onClick={complete}>Complete</button>
    </li>
  )
}

export default Task;