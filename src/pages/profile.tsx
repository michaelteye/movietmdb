import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import MovieData from '../hooks/getMovies';
import FetchQuery from '../hooks/getAllTrends';

// const Profile = () => {
//   const [movies, setMovies] = useState([]);
//   const [totalMovies, setTotalMovies] = useState(0)

//   useEffect(()=>{
//     fetchData()

//   },[])
  

//   const fetchData = async () => {
//     const uri = 'https://api.themoviedb.org/3/trending/all/day?language=en-US'
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjMyYTNhOTgxMDQzNzc3YzUyNjE4YTRmNmZhZjc1ZCIsInN1YiI6IjY0NzE5NWYzOTQwOGVjMDBjMjhlMzNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TFNE-KUDbxeeR7hY0vXNAx_Q_gTQBzJCanXUpw51Hmg'
//       }
//     };
//     try {
//       const response = await fetch(
//         uri, options
//       );

//       if(response.ok){
//         // console.log('the information you provided is sucessfull')
//       }

//       if(!response.ok){
//         console.log('bad request please check your network tap for results')
//       }

//       if (!response.ok) {
//         throw new Error('Request failed');
//       }

//       const data = await response.json();
//       setMovies(data.results);
//       setTotalMovies(data.total_results)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };


//   return (
//     <div>
//       {
//         movies.map((movie:any)=>(
//           <div key={movie.id}>
//                 <p>{movie.title || movie.name}</p>
//           </div>
//         ))
//       }
     
//     </div>
//   );
// };

// export default Profile;

// {movie.poster_path && (
//   <img
//     src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//     alt={movie.title || movie.name}
//   />
// )}
const Profile = () =>{
  const {isLoading, isError, isSuccess, data} = FetchQuery()

  if(isLoading){
    return <p>Loading...</p>
  }

  if(isError){
    return <p>Error fetching data</p>
  }

  return(
    <div>
      
    </div>
  )
}

export default Profile