import React from 'react'
import { useParams } from 'react-router-dom'
import FetchSingleMovieDetails from '../../hooks/detailMovie'
import { Link } from 'react-router-dom'

import MovieSvg from '../../components/icons/movie'
const  WatchMovie=({movieId}:{movieId:any})=>{

    
    const { data:movie,isError:errorMessage } = FetchSingleMovieDetails(movieId)
  return (
    <>
    
        <div className="max-w-[320px] p-6   rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-[#141a23]">
            <div className='bg-[#141a23]'>
                <div className='flex'>
                    <p className="mb-2 text-xl font-bold tracking-tight text-white ">{movie && movie.title}</p>
                </div>
                <div className='flex'>
                    <p className='text-dirt bg-[#605f62] text-center w-8 rounded-md text-sm'>HD</p>
                    <p className='text-[#605f62] text-center text-sm pl-1'>{movie && movie.vote_average}</p>
                    <p className='text-[#605f62] text-sm pl-1'>{movie && movie.vote_average}</p>
                    <p className='text-[#605f62] pl-2 text-sm truncate'>{movie && movie.release_date}</p>
                </div>
            </div>
        </div>
        <div className="max-w-[320px] p-6 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700 bg-[#2c343d]">
            <div className=''>
                <div className='flex'>
                    <p className="mb-2 text-sm font-normal tracking-tight text-[#605f62] dark:text-white leading-4 truncate">{movie && movie.overview}</p>
                </div>
                    {/* <p className='text-[#605f62] text-center w-8 rounded-md text-sm flex'>Country: <span className='text-[#c1c0c4] text-sm w-8 pl-1 font-normal'>{movie && movie.production_companies[0].name}</span></p> */}
                    <p className='text-[#605f62] text-center w-8 rounded-md text-sm flex'>Genre: <span className='text-[#c1c0c4] text-sm w-8 pl-1 font-normal'>{movie && movie.genres[0].name}</span></p>
                    <p className='text-[#605f62]'>Scores: {movie && movie.vote_average}</p>
            </div>
            <Link className="inline-flex  justify-center w-[250px] ml-[9px] items-center px-4 py-2 text-sm font-medium text-center text-black bg-[#ffae06] rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            to={`/movie/${movieId}`} 
            >
                Watch Now 
                <span className='w-10 pl-2'>
                <MovieSvg/>
                </span>
            </Link>  
            
        </div>
 
    </>
  )
}

export default WatchMovie
