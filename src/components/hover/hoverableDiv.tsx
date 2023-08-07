import React from 'react'
import NewReleased from '../../pages/NewReleased/NewReleased'

const hoverableDiv =({handleMouseOver, handleMouseOut }:{handleMouseOver:any; handleMouseOut:any})=>{
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {/* <NewReleased/> */}
    </div>
  )
}
