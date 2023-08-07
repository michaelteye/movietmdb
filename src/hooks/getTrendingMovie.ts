import { useQuery } from "react-query"
import axios from "axios"



const FetchTrendingMovieData = async()=>{
    
    const uri = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjMyYTNhOTgxMDQzNzc3YzUyNjE4YTRmNmZhZjc1ZCIsInN1YiI6IjY0NzE5NWYzOTQwOGVjMDBjMjhlMzNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TFNE-KUDbxeeR7hY0vXNAx_Q_gTQBzJCanXUpw51Hmg'
        },
    };

    const response = await axios(uri, options)
    if(response.status === 200){
        return response.data.results
    }
}

const FetchTrendingMovieQuery = ()=>{
    return useQuery('TrendingMovie', FetchTrendingMovieData)
}
export default FetchTrendingMovieQuery