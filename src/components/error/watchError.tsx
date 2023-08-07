import { useState } from "react"
import { Link } from "react-router-dom"
import MovieSvg from "../icons/movie"
import CloseMovieSvg from "../icons/closeMovie"

export default function WatchError({HandleClick}:{HandleClick:any}) {
    
  return (
    <>
    <div className="max-w-[350px] p-6  rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-[#141a23]">
            <div className='text-center text-white pb-4'>
            <p >Sorry You can't play this video for now</p>
            </div>
            <button onClick={HandleClick} className="inline-flex mt-4 mb-4 justify-center w-[250px] ml-[9px] items-center px-4 py-2 text-sm font-medium text-center text-black bg-[#ffae06] rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                close Video
                  <CloseMovieSvg/>
            </button>  
        </div>
    </>
  )
}
