import React, { useEffect, useState } from 'react'
import FetchTrendsQuery from '../../hooks/getAllTrends'
import YearSvg from '../../components/icons/year'
import classNames from 'classnames'
import SingleMovieSvg from '../../components/icons/singleMovie'
import { Link } from 'react-router-dom'
import WatchMovie from '../../pages/watch/watchMovie'

export default function AllTrending() {
    const {isLoading, isError:FetchTrendingError, isSuccess, data:Movies} = FetchTrendsQuery()
    const [hoveredMovieId, setHoveredMovieId] = useState('');
    const [isHovering, setIsHovering] = useState(false);
    // const [ isHovering, setIsHovering ] = useState('')
    const [currentPage, setCurrentPage] = useState(1);


    const handlePageChange = (selectedPage:any) => {
        const pageNumber = selectedPage.selected + 1;
        console.log(pageNumber)
        setCurrentPage(pageNumber);
      };
    
    //   const handleMouseOver = () => {
    //     setIsHovering(true);
    //   };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    
      const handleMouseOver = (movieId: string) => {
        setHoveredMovieId(movieId);
      };

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                await FetchTrendsQuery()
            }
            catch(err:any){
               console.log('err', err)    
            }

        }
        fetchData()
       
    },[])
  

    // Implementing the FetchLatestQuery
    console.log('data is', Movies)
  return (
    
            <div className='flex flex-wrap'>
                {Movies && Movies.map((movie: any) => (
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
