import axios from "axios";
import * as Types from "../types";
const API_KEY='c196179590cd620f6aa69b9eb2071862';
const BASE_URL='https://api.themoviedb.org/3';
export const getNetflixOriginals= ()=>async dispatch=>{
    try {
        const result=await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: Types.GET_NETFLIX_ORIGINAL,payload:result.data.results})
    } catch (error) {
        console.log('Get Netflix API error',error)
    }
}