import React, { useState } from 'react';
import YearSvg from '../../components/icons/year';
import SearchLayout from '../../components/layouts/searchLayout';
import SearchMovieQuery from '../../hooks/searchMovie';
import Display from '../Display';


export default function ReleasesDisplay() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const { data, isLoading } = SearchMovieQuery(searchQuery);

  return (
    <div>
      <SearchLayout handleSearch={handleSearch} searchQuery={searchQuery} />
      {!searchQuery ? (
        <Display searchQuery={searchQuery} />
      ) : (
        <SearchResults data={data} isLoading={isLoading} />
      )}
    </div>
  );
}

interface SearchResultsProps {
  data: any[];
  isLoading: boolean;
}

function SearchResults({ data:allData, isLoading }: SearchResultsProps) {
  return (
    <div className='bg-black'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex flex-wrap'>
            <div className='flex flex-wrap '>
                {allData.map((movie:any) => (
                    <div key={movie.id} className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 relative'>
                        <img className="w-full h-[220px] rounded" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                        alt={movie.title || movie.name} />
                         <p className='bg-[#020916]  text-white absolute top-2 left-4 rounded mt-1 w-8 text-center'>HD</p>
                         <div className='text-center bottom-0'>
                            <p className='text-white truncate'>{movie.title || movie.name}</p>
                            <p className='text-zinc-400'>{`${movie.first_air_date  || movie.release_date}`}<span> { movie.media_type }</span></p>
                            <span className='flex text-center pl-10'>
                                <span>
                                    <YearSvg/>
                                </span>
                                year
                            </span>
                        </div>
                    </div>
                ))}
            </div>
         
        </div>
      )}
    </div>
  );
}
