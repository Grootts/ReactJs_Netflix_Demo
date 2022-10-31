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
export const getTrenddingMovie= ()=>async dispatch=>{
    try {
        const result=await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        dispatch({type: Types.GET_TRENDDING_MOVIES,payload:result.data.results})
    } catch (error) {
        console.log('Get Trendding API error',error)
    }
}
export const getTopRatedMovie= ()=>async dispatch=>{
    try {
        const result=await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        dispatch({type: Types.GET_TOPRATED_MOVIES,payload:result.data.results})
    } catch (error) {
        console.log('Get TopRate API error',error)
    }
}
export const getActionMovie= ()=>async dispatch=>{
    try {
        const result=await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&&language=en-US&page=5`
        );
        dispatch({type: Types.GET_ACTION_MOVIES,payload:result.data.results})
    } catch (error) {
        console.log('Get Action API error',error)
    }
}
export const getComedyMovie= ()=>async dispatch=>{
    try {
        const result=await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=35`
        );
        dispatch({type: Types.GET_COMEDY_MOVIES,payload:result.data.results})
    } catch (error) {
        console.log('Get Comedy API error',error)
    }
}
export const getRomanceMovie= ()=>async dispatch=>{
    try {
        const result=await axios.get(
            `${BASE_URL}/movie/upcoming?api_key=c196179590cd620f6aa69b9eb2071862&language=en-US&page=1`
        );
        dispatch({type: Types.GET_ROMANCE_MOVIES,payload:result.data.results})
    } catch (error) {
        console.log('Get Romance API error',error)
    }
}