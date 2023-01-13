import React from 'react'
import Sidebar from './Sidebar'
import Timer from './Timer'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar />
        <Timer />
    </div>
  )
}

export default Home