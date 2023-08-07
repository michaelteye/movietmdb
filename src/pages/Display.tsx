import React, { useState } from 'react';
import ArrowSvg from '../components/icons/ArrowSvg';

import SearchLayout from '../components/layouts/searchLayout';
import AllTrending from '../dashboard/featured/Trending';
import TrendingMovie from '../dashboard/featured/TrendingMovies';
import TrendingTv from '../dashboard/featured/TrendingTv';
import LatestMovieTv from '../dashboard/LatestMovie';
import SearchMovieQuery from '../hooks/searchMovie';
import FetchTrendsQuery from '../hooks/getAllTrends';
import { Link } from 'react-router-dom';

interface DisplayProps {
  searchQuery: string;
  
}

export default function Display({ searchQuery }: DisplayProps) {
  const buttonStyle = 'rounded bg-[#1a212d] ml-2 my-2 px-2 text-center text-[#605f62] h-[30px] font-light text-[12px] w-[70px]';
  const buttonStyle1 = 'rounded bg-[#ffae06] text-white ml-2 my-2 px-2 text-center h-[30px] font-light text-[12px] w-[70px]';
  const tvstyle = 'rounded bg-[#1a212d] ml-2 my-2 px-2 text-center text-[#605f62] h-[30px] font-light text-[12px] w-[70px] justify-center'
  const [onhovering,setOnhovering]=useState(false)
  const [activeButton, setActiveButton] = useState('trending');

  const handButton = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const handleHover = ()=>{
    setOnhovering(true)
  }

  const { isLoading, isError:FetchTrendingError, isSuccess, data: Movies } = SearchMovieQuery(searchQuery);
  const { data: movies } = FetchTrendsQuery();

  return (
    <div className="bg-[#020916]" onMouseOver={handleHover}>
      {!searchQuery ? (
        <>
          <div className="flex flex-col items-center">
            <p className="my-2 ml-2 text-white font-extrabold text-[24px]">FEATURED</p>
            <div className="flex mt-2 md:mt-0">
              <button onClick={() => handButton('movie')} className={activeButton === 'movie' ? buttonStyle1 : buttonStyle}>
                Movies
              </button>
              <button onClick={() => handButton('tv show')} className={activeButton === 'tv show' ? buttonStyle1 : tvstyle}>
                Tv show
              </button>
              <button onClick={() => handButton('trending')} className={activeButton === 'trending' ? buttonStyle1 : buttonStyle}>
                Trending
              </button>
            </div>
          </div>

          {/* Section for the images and the update content */}
          <div className="flex flex-col md:flex-row">
            <div className="w-full">
              {activeButton === 'trending' ? <AllTrending /> : activeButton === 'movie' ? <TrendingMovie /> : activeButton === 'tv show' ? <TrendingTv /> : ''}
              <LatestMovieTv />
            </div>

            <div className="w-full mt-4 md:mt-0">
              <div className="h-full">

                {/* Place your text content here */}
                <div className="flex justify-between items-center px-2">
                  <p className="text-white font-extrabold text-[24px]">UPDATED</p>
                  <button className="w-[70px] h-[30px] text-[#605f62] bg-[#1a212d] rounded-md flex items-center justify-center font-medium text-[12px]">
                    More
                    <span>
                      <ArrowSvg />
                    </span>
                  </button>
                </div>

                {/* The code on the update part */}
                <div className="px-2 mt-2">
                  {movies && movies.slice(0, 9).map((movie: any) => (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                      <div className={`flex-col w-full h-[70px] mt-[2px] bg-[#020916] text-white hover:bg-cardRadient  border-2 border-zinc-700 border-solid rounded-md ${movie[0] ? 'mt-[30]' : ''}`}>
                        <div className="flex">
                          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="w-10 h-[60px] md:32 pl-2 pt-2 rounded-md text-center" />
                          <p className="pt-2 pl-2 truncate">{movie.title || movie.name}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SearchLayout handleSearch={() => {}} searchQuery={searchQuery} />
      )}
    </div>
  );
}
