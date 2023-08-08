import Allroutes from './routes/allroutes'
import Navbar from './dashboard/navbar'


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
