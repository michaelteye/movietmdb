import { useQuery } from "react-query"
import axios from "axios"



const SearchMovieData = async(searchQuery:any)=>{
    
    const uri = `https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1&query=${encodeURIComponent(searchQuery)}`
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

const SearchMovieQuery = (searchQuery:any)=>{
    return useQuery(['TrendingMovie',searchQuery],() => SearchMovieData(searchQuery))
}
export default SearchMovieQuery