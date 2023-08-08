import classNames from "classnames";
import React, { useState } from "react";
import Year from "../../dashboard/Radios/year";
import Country from "../../dashboard/Radios/country";
import Genre from "../../dashboard/Radios/genre";
import Quality from "../../dashboard/Radios/quality";
import Rating from "../../dashboard/Radios/rating";
import Release from "../../dashboard/Radios/release";
import Type from "../../dashboard/Radios/type";
import FetchPaginateUpComingQuery from "../../hooks/pagenateUpcoming";
import FetchTrendsQuery from "../../hooks/getAllTrends";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import WatchMovie from "../watch/watchMovie";
import SingleMovieSvg from "../../components/icons/singleMovie";
import SearchMovieQuery from "../../hooks/searchMovie";
import StarMainSvg from "../../components/icons/star-solid";

export default function NewReleased() {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hoveredMovieId, setHoveredMovieId] = useState("");
  const {
    data,
    isLoading,
    isError: errorMessage,
  } = FetchPaginateUpComingQuery(currentPage);
  const { data: movies } = FetchTrendsQuery();
  const moviesData = data?.data || [];
  const pageCounts = data?.pageCount || 0;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (selectedPage: any) => {
    const pageNumber = selectedPage.selected + 1;
    console.log(pageNumber);
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
  //implementing the handleSearch in the newRealeased

  const { data: search, isLoading: Loading } = SearchMovieQuery(searchQuery);

  const styleComponent =
    "mr-1 text-[#666666] bg-filterColor  h-[30px] hover:bg-changeColor hover:text-black focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center ";
  // const buttonStyle = 'rounded bg-[#1a212d] ml-2 my-2 px-2 text-center text-[#605f62] h-[30px] font-light text-[12px]';

  const toggleDropdown = (dropdownName: any) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(dropdownName);
      console.log("activeDropdown is >>>", activeDropdown);
    }
  };

  return (
    <div className="bg-[#020916] pt-10">
      <p>NEW RELEASE</p>
      <div className="flex flex-wrap">
        <div className="w-3/4">
          <div className="flex pl-2">
            <div className=" h-[30px] ">
              <input
                type="text"
                placeholder="search..."
                className="text-[#666666] bg-[#1a212d] w-[120px] rounded mr-2 h-[30px] text-center"
              />
            </div>
            <Year
              isOpen={activeDropdown === "year"}
              onToggle={() => toggleDropdown("year")}
              style={styleComponent}
            />
            <Country
              isOpen={activeDropdown === "country"}
              onToggle={() => toggleDropdown("country")}
              style={styleComponent}
            />
            <Genre
              isOpen={activeDropdown === "genre"}
              onToggle={() => toggleDropdown("genre")}
              style={styleComponent}
            />
            <Quality
              isOpen={activeDropdown === "quality"}
              onToggle={() => toggleDropdown("quality")}
              style={styleComponent}
            />
            <Rating
              isOpen={activeDropdown === "rating"}
              onToggle={() => toggleDropdown("rating")}
              style={styleComponent}
            />
            <Release
              isOpen={activeDropdown === "release"}
              onToggle={() => toggleDropdown("release")}
              style={styleComponent}
            />
            <Type
              isOpen={activeDropdown === "type"}
              onToggle={() => toggleDropdown("type")}
              style={styleComponent}
            />
            <button
              data-dropdown-toggle="dropdownDefaultRadio"
              className="tex-black bg-[#ffae06] h-[30px] ml-1
              font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              filter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 ml-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap">
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {/* Page movie */}
                {moviesData &&
                  moviesData.map((movie: any) => (
                    <div
                      key={movie.id}
                      // className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2"
                      className={classNames(
                        "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 pt-4",
                        {
                          "hover:bg-radientColor": hoveredMovieId === movie.id,
                        }
                      )}
                      onMouseOver={() => handleMouseOver(movie.id)}
                      onMouseOut={handleMouseOut}
                    >
                      <Link
                        to={`/movie/${movie.id}`}
                        className="hover:bg-background"
                      >
                        <div
                          className={classNames("w-full h-auto relative", {
                            "bg-background": hoveredMovieId === movie.id,
                          })}
                        >
                          <img
                            className={classNames("w-full h-auto rounded-lg", {
                              "rounded-ful": hoveredMovieId === movie.id,
                            })}
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                          />

                          {hoveredMovieId === movie.id && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 bg-cardRadient rounded-lg">
                              <SingleMovieSvg className="bg-white" />
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
              </>
            )}
          </div>

          <div className="  mt-4 inline-flex -space-x-px">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"....."}
              breakClassName="px-2 bg-white w-[45px] text-center"
              pageCount={pageCounts}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              nextClassName="px-3 py-2 ml-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              containerClassName="bg-black inline-flex space-x-px  rounded ml-[500px] mb-4"
              activeClassName="bg-yellow-400 text-white"
              previousClassName="px-3 py-2 mr-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              pageClassName="px-3 py-2 pl-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            />
          </div>
        </div>

        <div className="w-1/4">
          <div className="h-full">
           
            <div className="pl-[5px] pt-[32px]">
              
                <p className="text-white text-2xl font-bold">SUGGESTIONS</p>
              
              <div className="sm:flex flex-wrap">

              {movies &&
                movies.slice(0, 9).map((movie: any) => (
                  <Link to={`/movie/${movie.id}`}>
                    <div
                      className={`flex-col w-[280px] h-[70px] mt-[2px] bg-[#020916] text-white hover:bg-cardRadient  border-2 border-zinc-700 border-solid rounded-md ${
                        movie[0] ? "mt-[30" : ""
                      }`}
                      >
                      <div className="flex">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt=""
                          className="w-10 h-[60px] md:32 pl-2 pt-2 rounded-md text-center"
                          />
                        <p className="pt-2 pl-2 truncate">
                          {movie.title || movie.name}
                          <br />
                          <div className="flex text-sm font-light">
                            <p className="pt-1">
                              <StarMainSvg />
                            </p>
                            <span className="pb-2 pl-[2px] pt-[2px] font-light text-xs text-[#ffae06]">
                              {movie.genre_ids[0]}
                            </span>
                            <span className="pb-2 pl-[5px] pt-[2px] font-light text-xs text-[#666666]">
                              {movie.vote_average} EP {movie.genre_ids[0]}
                            </span>
                          </div>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal goes here */}

      {/* {isHovering && <WatchMovie/>} */}
    </div>
  );
}
