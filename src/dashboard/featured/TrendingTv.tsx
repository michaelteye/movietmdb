import React, { useEffect, useState } from 'react'
import FetchTrendingTv from '../../hooks/getTrendingTv'
import YearSvg from '../../components/icons/year'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import SingleMovieSvg from '../../components/icons/singleMovie'
import WatchMovie from '../../pages/watch/watchMovie'

export default function TrendingTv() {
    const {isLoading, isError:FetchTrendingError, isSuccess, data:TrendingTv} = FetchTrendingTv()
    const [hoveredMovieId, setHoveredMovieId] = useState('');
    const [isHovering, setIsHovering] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (selectedPage:any) => {
        const pageNumber = selectedPage.selected + 1;
        console.log(pageNumber)
        setCurrentPage(pageNumber);
      };
    
      // const handleMouseOver = () => {
      //   setIsHovering(true);
      // };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    
      const handleMouseOver = (movieId: string) => {
        setHoveredMovieId(movieId);
      };

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                await FetchTrendingTv()
            }
            catch(err:any){
               console.log('err', err)    
            }

        }
        fetchData()
       
    },[])
  

    // Implementing the FetchLatestQuery
    console.log('data is', TrendingTv)
  return (
                            // <div className="flex flex-wrap">
                            //     {/* {thumbnailUrls.map((url, index) => ( */}
                            //         {
                            //             TrendingTv && TrendingTv.map((tv:any)=>(
                                            
                            //             <div key={tv.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 relative">

                            //                     <img className="w-full h-[220px] rounded" src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} 
                            //                     alt={tv.title || tv.name} />
                            //                     <p className='bg-[#020916]  text-white absolute top-2 left-4 rounded mt-1 w-8 text-center'>HD</p>
                            //                     <div className='text-center bottom-0'>
                            //                         <p className='text-white truncate'>{tv.title || tv.name}</p>
                            //                         <p className='text-zinc-400'>{`${tv.first_air_date  || tv.release_date}`}<span> { tv.media_type }</span></p>
                            //                         <span className='flex text-center pl-10'>
                            //                             <span>
                            //                             {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            //                             </svg>*/}
                            //                             <YearSvg/>
                            //                             </span>
                            //                             year
                            //                         </span>
                            //                     </div>
                            //             </div>
                            //     ))
                            //         }
                            // </div>

                    <div className='flex flex-wrap'>
                    {TrendingTv && TrendingTv.map((movie: any) => (
                    <div
                    key={movie.id}
                    // className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                    className={classNames('w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2',{
                        'hover:bg-radientColor': hoveredMovieId=== movie.id
                    })}
                    onMouseOver={() => handleMouseOver(movie.id)}
                    onMouseOut={handleMouseOut}
                    >
                    <Link to={`/movie/${movie.id}`} className="hover:bg-background">
                        <div className={classNames('w-full h-auto relative',{
                        'bg-background': hoveredMovieId === movie.id
                        })}>
                        <img
                            className={classNames('w-full h-auto rounded-lg',{
                                'rounded-ful': hoveredMovieId === movie.id
                            })}
                            src={
                                `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            }
                            alt={movie.title}
                        />

                            
                        {hoveredMovieId === movie.id && (
                                <div className="absolute inset-0 flex items-center justify-center z-10 bg-cardRadient rounded-lg">
                                    <SingleMovieSvg className='bg-white' />
                                </div>
                                )}

                        

                        </div>
                        
                    </Link>
                    <p className="pt-2 pl-2 truncate text-white">
                        {movie.title || movie.name}
                    </p>
                    {hoveredMovieId === movie.id && (
                        <div className="absolute mt-2 z-20">
                        <WatchMovie movieId={movie.id} />
                        </div>
                    )}
                    </div>
                    ))}

                </div>
  )
}
