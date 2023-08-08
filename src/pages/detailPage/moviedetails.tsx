import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchSingleMovieDetails from '../../hooks/detailMovie';
import WhatsappSvg from '../../components/icons/whatsapp';
import FacebookSvg from '../../components/icons/facebook';
import TwitterSvg from '../../components/icons/twitter';
import InstagramSvg from '../../components/icons/telegram';
import SnapSvg from '../../components/icons/snap';
import LinkedInSvg from '../../components/icons/linkedIn';
import DatabaseSvg from '../../components/icons/database';
import InteractiveCommentsSection from './InteractiveCommentsSection';
import FetchTrendsQuery from '../../hooks/getAllTrends';
import FetchPaginateUpComingQuery from '../../hooks/pagenateUpcoming';
import WatchSvg from '../../components/icons/watch';
import { Link } from 'react-router-dom';
import WatchError from '../../components/error/watchError';



export default function MovieDetails() {
  const { movieId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const iconstyle = 'bg-yellow-600 w-[130px] h-[32px] rounded-lg pl-[52px] ml-2'
  const radioStyle = 'mb-2 ml-4 border border-[#605f62] w-auto rounded-lg px-2 py-1 text-[#605f62]'

  const { data: movie, isError, error } = FetchSingleMovieDetails(movieId);
  const { data, isLoading, isError:errorMessage } = FetchPaginateUpComingQuery(currentPage);
  const { data: Movies } = FetchTrendsQuery();
  const moviesData = data?.data || [];
  const [showError, setShowError] = useState(false)
  const [clearError, setClearError] = useState(false)

  const handleControl = () => {
    setShowError((prevShowError) => !prevShowError);
  };

  const handleClear = () => {
    setShowError(false);
  };

  return (
    <>
      {movie && (
        
        <div key={movie.id} className="flex items-center justify-center"
        style={{
            backgroundImage:`linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.35)), url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat:'no-repeat'
        }}>
          <div className="w-full max-w-screen h-auto"
          >
          
                <div className="relative">

                   <div
                        className="absolute inset-0 flex items-center justify-center pt-[350px]"
                        style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}}
                        >
                             {showError ? 
                                <WatchError HandleClick={handleClear}/>
                                   : !showError ?
                                    <div className='w-[50px]'>
                                        <button onClick={handleControl}>
                                          <WatchSvg/>
                                        </button>
                                    </div> : '' 
                            }
                          
                    </div>
                </div>
                <div className="pl-[400px] py-4 flex text-center mt-[600px]">
               
                    <div className={radioStyle}>
                        <input type="radio" className= 'bg-[#605f62]  rounded checked:bg-blue-500'/>
                        <label htmlFor="okay" className='pl-1 text-[#605f62]'>Auto Play</label>
                    </div>
                    <div className={radioStyle}>
                        <input type="radio" className= 'bg-[#605f62]'/>
                        <label htmlFor="okay" className='pl-1 text-[#605f62]'>Auto Play</label>
                    </div>
                    <div className={radioStyle}>
                        <input type="radio" className= 'bg-[#605f62]'/>
                        <label htmlFor="okay" className='pl-1 text-[#605f62]'>Auto Play</label>
                    </div>
                    <div className={radioStyle}>
                        <input type="radio" className= 'bg-[#605f62]'/>
                        <label htmlFor="okay" className='pl-1 text-[#605f62]'>Auto Play</label>
                    </div>
                    <div className={radioStyle}>
                        <input type="radio" className= 'bg-[#605f62]'/>
                        <label htmlFor="okay" className='pl-1 text-[#605f62]'>Auto Play</label>
                    </div>
                </div>
                <div className='flex pl-[300px]'>
                    <button className='bg-green-600 w-[130px] h-[32px] rounded-lg pl-[52px] ml-2'>
                    <WhatsappSvg />
                    </button>
                    <button className='bg-blue-600 w-[130px] h-[32px] rounded-lg pl-[52px] ml-2'>
                    <FacebookSvg/>
                    </button>
                    <button className='bg-blue-400 w-[130px] h-[32px] rounded-lg pl-[52px] ml-2'>
                    <TwitterSvg />
                    </button>
                    <button className='bg-orange-600 w-[130px] h-[32px] rounded-lg pl-[52px] ml-2'>
                        <InstagramSvg/>
                    </button>
                    <button className='bg-red-600 w-[130px] h-[32px] rounded-lg pl-[52px] ml-2'>
                    <SnapSvg />
                    </button>
                    <button className='bg-blue-600 w-[130px] h-[32px] rounded-lg pl-[52px] ml-2'>
                    <LinkedInSvg />
                    </button>

                </div>
                <div className='px-8'>
                    <p className='text-[#605f62] text-center pt-8'>If current server doesn't work please try other servers below.</p>
                </div>
                <div className='pt-4 w-full flex pl-[85px]'>
                    <button className='ml-[400px] text-[#3D3C3F] font-semibold w-[120px] text-center border border-[#605f62] outline-1  rounded-lg mb-1 hover:bg-radientColor hover:border-2 hover:border-[#605f62] hover:text-white'>
                                <h4>
                                    Vidstream
                                </h4>
                                <p className='flex pl-6 hover:text-[#3D3C3F] hover:cursor-pointer'>
                                    <DatabaseSvg/>
                                    <span>server</span>
                                </p>
                    </button>
                  
                    <button className='ml-[5px] hover:cursor-pointer text-[#3D3C3F] font-semibold w-[120px] text-center border border-[#605f62] outline-white  rounded-lg mb-1 hover:bg-radientColor hover:border-2 hover:border-[#605f62] hover:text-white'>
                        <h4>
                            Vidstream
                        </h4>
                        <p className='flex pl-6 hover:text-[#3D3C3F] hover:cursor-pointer'>
                            <DatabaseSvg/>
                            <span className='hover:text-[#3D3C3F]'>server</span>
                        </p>
                    </button>
                    <button className='ml-[5px] hover:cursor-pointer text-[#3D3C3F] font-semibold w-[120px] text-center border border-[#605f62] outline-1  rounded-lg mb-1 hover:bg-radientColor hover:border-2 hover:border-[#605f62] hover:text-white'>
                        <h4>
                            Vidstream
                        </h4>
                        <p className='flex pl-6 hover:text-[#3D3C3F] hover:cursor-pointer'>
                            <DatabaseSvg/>
                            <span className='hover:text-[#4d4d4d]'>server</span>
                             
                        </p>
                    </button>
                    <button className='ml-[5px] hover:cursor-pointer text-[#4d4d4d] font-semibold w-[120px] text-center border border-[#605f62] outline-1  rounded-lg mb-1 hover:bg-radientColor hover:border-2 hover:border-[#605f62] hover:text-white'>
                        <h4>
                            Vidstream
                        </h4>
                        <p className='flex pl-6 hover:text-[#3D3C3F] hover:cursor-pointer'>
                            <DatabaseSvg/>
                            <span className='hover:text-[#4d4d4d]'>server</span>
                        </p>
                    </button>    
                   

                </div>
          </div>
        </div>
      
      )}
        {/* the next content goes here */}
        <div className='flex flex-wrap bg-black'>
                <div className='w-[995px] pt-4  border-solid divide-blue-200 bg-black '>
                    {/* content */}
                                            <div className='flex pl-2 mb-1 pb-6 border-2 rounded-lg relative border-solid bg-black border-[#605f6249]'>
                                                    <div className="absolute top-0 right-0">
                                                        <p className="bg-red-500 text-white px-2 py-1 rounded-lg">Text</p>
                                                    </div>
                                                <img src={`https://image.tmdb.org/t/p/w500/${movie && movie.poster_path}`} className='h-[300px] w-[290px] top-0 rounded' alt="" />
                                            <div className='pl-2 pt-4 bottom-0 text-white'>
                                                
                                                    <h1 className='pl-4 text-4xl font-extrabold pb-4'>{movie && movie.title}</h1>
                                                    <ul className='flex text-white pl-4 pb-4'>
                                                        <li className='pr-2'>HD</li>
                                                        <li className='pr-2'>{movie && movie.iso_3166_1}</li>
                                                        <li className='pr-2'>{movie && movie.vote_average}</li>
                                                        <li className='pr-2'>{movie && movie.vote_count}</li>
                                                        <li className='pr-2'>{movie && movie.runtime}</li>
                                                    </ul>
                                                        <p className='text-white pl-4 pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, ducimus. Eos ipsam atque similique perferendis, a
                                                        t ullam ea nulla dicta odio maiores sed.</p>
                                                    <div className="flex text-white">
                                                        <div className="bg-black pr-4 pl-4">
                                                            <p>Country: </p>
                                                            <p>Type: </p>
                                                            <p>Release: </p>
                                                            <p>HomePage: </p>
                                                            <p>Tag:</p>
                                                        </div>
                                                        <div className="bg-black pl-4">
                                                            
                                                            <p>{movie && movie.production_countries[0].name}</p>
                                                            <p>{movie && movie.genres[0].name}</p>            
                                                            <p>
                                                           {movie && movie.release_date}
                                                            </p>
                                                            <p>{ movie && movie.homepage }</p>
                                                            <p>{ movie && movie.overview.slice(0,120).concat('.....')}</p>
                                                        </div>
                                                    </div>
                                            </div>
                                            </div>
            </div>
            <div className=' rounded-lg w-[22%] bg-black text-white  ml-[62px] mt-4 border mb-1 border-[#605f6268]'>
                <div className='pt-2 text-center border border-[#605f624d] '>
                    <p>Movie Files</p>
                </div>
            </div>
      </div>
       
        {/* the movie content goes here */}
    

        <div className="flex flex-wrap bg-black">
                <div className='w-[75%]'>
                   
                <InteractiveCommentsSection/>             
                </div>
                <div className="h-full w-1/4 bg-black">
                    {/* Place your text content here */}
                    <div className='flex pt-[90px] pl-[4px] font-extrabold'>
                        <p className='pl-0 text-white font-extrabold text-[24px]'>RECOMMENDED</p>
                        <div className=' ml-10 text-center pl-[50px]'>
                        </div>

                    </div>

                    {/* The code on the update part */}
                    <div className='pl-[5px] pt-[15px] '>
                        {/* {thumbnailUrls.slice(0,7).map((uri, index)=>( */}
                        { moviesData && moviesData.slice(0,13).map((movie:any)=>(
                            <Link to={`/movie/${movie.id}`}>
                                <div className={`flex-col w-[280px] h-[70px] mt-[2px] bg-[#020916] text-white hover:bg-cardRadient  border-2 border-zinc-700 border-solid rounded-md ${movie[0] ? 'mt-[30' : ''}`}>
                                        <div className='flex'>
                                                <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path}`} alt="" 
                                                className='w-10 h-[60px] md:32 pl-2 pt-2 rounded-md text-center'/>
                                                <p className='pt-2 pl-2 truncate'>{movie.title}</p>    
                                        </div>
                                    </div>
                            </Link>
                        ))}
                    </div>
                </div>
        </div>                
        

      
                        
    </>
  );
}
