import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'



const FetchMovieDetails = async(movieId:any)=>{

    const uri = `https://api.themoviedb.org/3/movie/${movieId}`
    const options = {
        method:'GET',
        headers:{
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjMyYTNhOTgxMDQzNzc3YzUyNjE4YTRmNmZhZjc1ZCIsInN1YiI6IjY0NzE5NWYzOTQwOGVjMDBjMjhlMzNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TFNE-KUDbxeeR7hY0vXNAx_Q_gTQBzJCanXUpw51Hmg',
        }
    }


    const response = await axios(uri,options);
    if(response.status === 200){
        console.log('the detail page is given as: ', response.data)
        const moviedetails = response.data
        console.log('the movie details is given as ', moviedetails)
        return moviedetails
    }

}

const FetchSingleMovieDetails = (movieId:any)=>{
    return useQuery(['movieDetails',movieId],()=>FetchMovieDetails(movieId))
}
export default FetchSingleMovieDetails
