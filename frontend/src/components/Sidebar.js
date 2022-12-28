import React from 'react'

const Sidebar = () => {
  const dummy_data = {
    tasks: [
      {
        id: 1,
        title: 'Task 1',
        description: 'This is task 1',
        completed: false,
      },
      {
        id: 2,
        title: 'Task 2',
        description: 'This is task 2',
        completed: false,
      },
    ]
  }
  return (
    
    <div className = 'sidebar'>
        <h1>Tasks</h1>
      <ul>
      {dummy_data.tasks.map(task=><li>{task.description} </li>)}
      </ul>

    </div>
  )
}

export default Sidebar