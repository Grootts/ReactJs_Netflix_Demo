import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNetflixOriginals } from '../store/actions';
import MovieRow from './MovieRow';

function Contents(props) {
    const dispatch=useDispatch();
    const{NetflixOriginals}=useSelector(state=>state.infoMovies);

    const movies=["http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg","http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg","http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg","http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg","http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg","http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg","http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg","http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg","http://sohanews.sohacdn.com/k:2012/tham-hoa-poster-04-kenh14-90559-0a4a7/nhung-toi-danh-dang-ngan-cua-poster-phim-viet-2012.jpg"];
useEffect(()=>{
dispatch(getNetflixOriginals());
},[dispatch]);

    return (
        <div>
            <MovieRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true}/>
            <MovieRow movies={movies} title="Trending Moives"/>
            <MovieRow movies={movies} title="Top Rated Moives"/>
            <MovieRow movies={movies} title="Action Moives"/>
            <MovieRow movies={movies} title="Comedy Moives"/> 
            <MovieRow movies={movies} title="Romance Moives"/> 
           
            
        </div>
    );
}

export default Contents;