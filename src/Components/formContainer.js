import React from "react"
import Task from './task'

export const Container = ({ list, handleRemove, handleComplete }) => {
  return (
    <ul>
      {list.map((item, index) => {
        return <Task key={index} item={item} remove={() => handleRemove(index)} complete={() => handleComplete(index)} />
      })}
    </ul>
  )
}

export default Container;