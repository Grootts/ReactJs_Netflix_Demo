import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNetflixOriginals,getTopRatedMovie,getTrenddingMovie,getActionMovie,getComedyMovie,getRomanceMovie } from '../store/actions';
import MovieRow from './MovieRow';

function Contents(props) {
    const dispatch=useDispatch();
    const{NetflixOriginals,TrenddingMovie,TopRatedMovie,ActionMovie,ComedyMovie,RomanceMovie}=useSelector(state=>state.infoMovies);  
useEffect(()=>{
dispatch(getNetflixOriginals());
dispatch(getTrenddingMovie());
dispatch(getTopRatedMovie());
dispatch(getRomanceMovie());
dispatch(getComedyMovie());
dispatch(getActionMovie());
},[dispatch]);
    return (
        <div>
            <MovieRow movies={NetflixOriginals} title="Netflix Originals"isNetflix={true} />
            <MovieRow movies={TrenddingMovie} title="Trending Moives" />
            <MovieRow movies={TopRatedMovie} title="Top Rated Moives" />
            <MovieRow movies={ActionMovie} title="Action Moives"/>
            <MovieRow movies={ComedyMovie} title="Comedy Moives"/> 
            <MovieRow movies={RomanceMovie} title="Romance Moives"/> 
           
            
        </div>
    );
}

export default Contents;