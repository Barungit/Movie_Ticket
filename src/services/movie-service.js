import axios from "axios";

const givenAPI = "https://api.tvmaze.com/search/shows?q=all";

export const movieData=()=>{
    return axios.get(givenAPI).then((response)=> response.data)
}