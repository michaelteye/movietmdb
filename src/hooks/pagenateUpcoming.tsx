import axios from "axios";
import { useQuery } from "react-query";

const FetchUpComingData = async (page:any) => {
    const uri = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjMyYTNhOTgxMDQzNzc3YzUyNjE4YTRmNmZhZjc1ZCIsInN1YiI6IjY0NzE5NWYzOTQwOGVjMDBjMjhlMzNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TFNE-KUDbxeeR7hY0vXNAx_Q_gTQBzJCanXUpw51Hmg',
      },
    };
  
    const response = await axios(uri,options);
    if (response.status === 200){
      console.log('the data from the pagination is >>>', response.data.results);
      return {
        data: response.data.results, //returning only the data
        pageCount:response.data.total_pages, //Add pageCount to the response
      };
    }
    if (!response){
      console.log('Error occurred');
    }
  };
  const FetchPaginateUpComingQuery = (page:any) => {
    return useQuery(['upcoming', page], () => FetchUpComingData(page));
  };
  export default FetchPaginateUpComingQuery;
  