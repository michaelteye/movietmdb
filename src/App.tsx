import React, { useState } from 'react'
import Allroutes from './routes/allroutes'
import Navbar from './dashboard/navbar'
import SearchLayout from './components/layouts/searchLayout'
import Display from './pages/Display'
import NewReleased from './pages/NewReleased/NewReleased'
import InteractiveCommentsSection from './pages/detailPage/InteractiveCommentsSection'



export default function App() {
  


  return (
    <div>
      <Navbar/>
      {/* <SearchLayout handleSearch={handleSearch} searchQuery={searchQuery} /> */}
      {/* <Display/> */}
      {/* <NewReleased/> */}
      <Allroutes/>

    </div>
  )
}
