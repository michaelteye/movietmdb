import { useQuery } from "react-query"
import axios from "axios"



const FetchLatestMovieData = async()=>{
    
    const uri = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'
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

const FetchLatestQuery = ()=>{
    return useQuery('lastest', FetchLatestMovieData)
}
export default FetchLatestQuery