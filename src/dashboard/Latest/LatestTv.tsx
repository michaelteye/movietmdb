import React from 'react'

import FetchLatestTvQuery from '../../hooks/getLatestTv'

export default function LatestTv() {
    const {isLoading:LoadingLatestMovie, isError:LatestError, data:Latest} = FetchLatestTvQuery()
  return (
    <>
                    {
                                                           Latest && Latest.map((latestmovie:any)=>(
                                                                

                                                    
                                                <div key={latestmovie.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 relative">

                                                                <img className="w-full h-[220px] rounded" src={`https://image.tmdb.org/t/p/w500/${latestmovie.poster_path}`} 
                                                                alt={latestmovie.title || latestmovie.name} />
                                                        <p className='bg-[#020916]  text-white absolute top-2 left-4 rounded mt-1 w-8 text-center'>HD</p>
                                                        <div className='text-center bottom-0'>
                                                            <p className='text-white truncate'>{latestmovie.title || latestmovie.name}</p>
                                                            <p className='text-zinc-400'>{latestmovie.popularity  }<span> { latestmovie.vote_count }</span></p>
                                                            <span className='flex text-center pl-10'>
                                                                <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                                </svg>
                                                                </span>
                                                                year
                                                            </span>
                                                        </div>
                                                </div>
                                            ))
                                                }

    </>
  )
}
