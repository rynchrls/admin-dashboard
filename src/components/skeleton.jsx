import React from 'react'
import '../css/dashboard/admin.css'

function Skeleton() {
  return (
    <div className='skeleton'>
        <div className='header-section'>
            <div className='loading'></div>
            <div className='loading'></div>
        </div>
        <div className='first-section'>
            <div className='loading'></div>
            <div className='loading'></div>
            <div className='loading'></div>
            <div className='loading'></div>
        </div>
        <div className='third-section loading'>

        </div>
    </div>
  )
}

export default Skeleton
