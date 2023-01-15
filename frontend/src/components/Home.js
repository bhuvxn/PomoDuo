import React from 'react'
import Sidebar from './Sidebar'
import Timer from './Timer'

const Home = () => {
  if (window.localStorage.getItem('loggedUser') === null) {
    window.location.href = '/login'
  }
  return (
    <div className='home'>
        <Sidebar />
        <Timer />
    </div>
  )
}

export default Home