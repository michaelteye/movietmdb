import React from 'react';
import PlaySvg from '../components/icons/play';
export default function HomeScreen() {
  return (
    <>
      <div className="bg-homeImage bg-cover h-screen w-screen m-0 p-4">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
        </div>
        <div className="max-w-2xl mt-[300px] pl-[200px] pt-[20px] relative">
          <h1 className="text-4xl font-sans font-extrabold pb-2 text-slate-200">No Exit</h1>
          {/* outputing the related videos */}

          <div className="absolute top-0 right-[-550px] pt-4 mt-2 mr-2">
            <h1 className="text-slate-200 font-poppins font-extrabold text-2xl">Related Video</h1>
            <div className="flex mt-2">
              <div className="max-w-xs rounded overflow-hidden shadow-lg flex">
                  <img className="w-full h-[100px]" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="max-w-xs rounded overflow-hidden shadow-lg flex ml-4">
                <img className="w-full h-[100px]" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
              <div className="max-w-xs rounded overflow-hidden shadow-lg flex ml-4">
                <img className="w-full h-[100px]" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
              </div>
            </div>

            {/* Including the actors section */}
            <div>
              <h1 className='text-slate-200 font-poppins font-extrabold text-2xl pt-[20px]'>Actors</h1>
                <div className="flex mt-2 ml-0">
                  <div className="max-w-xs rounded-full overflow-hidden shadow-lg flex items-center justify-center mr-2 flex-col">
                          <img className="w-[40px] h-[40px]" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="the main" />
                  </div>
                
                  <div className="max-w-xs rounded-full overflow-hidden shadow-lg flex items-center justify-center mr-2 flex-col">
                          <img className="w-[40px] h-[40px]" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                  </div>
                  <div className="max-w-xs rounded-full overflow-hidden shadow-lg flex items-center justify-center flex-col">
                          <img className="w-[40px] h-[40px]" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                         

                  </div>
              </div>
            </div>
          </div>


          {/* adding the actors here */}
          

          <p className="font-poppins pt-2 text-slate-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Quam alias doloremque excepturi voluptatibus dolore non sunt 
            repellendus aperiam quidem provident, illum tenetur quia odit aut, saepe a dignissimos, possimus commodi!
          </p>
          {/* trying the next section */}
      
          <div className="flex space-x-4 pb-10">
            <button className='flex bg-blue-600 w-[120px] rounded items-center text-lg pl-7 h-[50px] font-extrabold mt-4'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              <p className="text-black"> Play </p>
            </button>
            
            <button className='flex bg-gray-600 border-solid border-black w-[120px] rounded items-center text-lg h-[50px] pl-3 ml-4 mt-4 text-white leading-4'>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg> */}
              < PlaySvg/>
              <p className="text-white">More Info</p>
            </button>
          </div>
          {/* <div className='absolute top-0 right-[100px] mt-2 mr-2 '>
            <p className='text-slate-200 ml-[200px]'>Pernose</p>
          </div> */}
         
        </div>
        
      </div>
    </>
  );
}



