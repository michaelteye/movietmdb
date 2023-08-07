import React, { useState } from 'react';
import FilterSvg from '../icons/filter';
import SearchSvg from '../icons/search';
import SearchMovieQuery from '../../hooks/searchMovie';
import { QueryObserverResult } from 'react-query';

interface Movie {
  id: number;
  title: string;
  // Add other movie properties here
}

export default function SearchLayout({handleSearch,searchQuery}:{handleSearch:any,searchQuery:any}) {
  

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchQuery(e.target.value);
  // };

  const { data:myData, isLoading, isError } = SearchMovieQuery(searchQuery);

  return (
    <>
      <form className="flex items-center justify-center pt-10 bg-startbg">
        <div className="relative bg-[#1a212d] rounded-lg h-[50px]">
          <button className='absolute top-6 left-2  transform -translate-y-1/2 bg-yellow-500  text-black rounded-lg px-2 pt-2 duration- flex h-[30px] text-center text-[15px] text-xs font-bold'>
            <FilterSvg/>
            Filter
          </button>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            className="w-[800px] pt-[15px] pl-[120px] h-[40px] pr-10 text-sm bg-[#1a212d] text-white placeholder-gray-400 rounded-full focus:outline-none focus:border-transparent"
            placeholder="Search TV Shows, Movies..."
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1a212d] rounded-md ml-2 px-1 py-2"
          >
            <SearchSvg/>
          </button>

          {/* <div className='absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto'>
          {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>Error occurred.</div>
            ) : (
              <ul>
                {myData?.map((movie: Movie) => (
                  <li key={movie.id}>{movie.title}</li>
                ))}
              </ul>
            )}
          </div> */}
        </div>
      </form>
    </>
  );
}
