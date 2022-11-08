import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../Contents/Contents";
import Intro from "../Intro/Intro";
import Menu from "../Menu/Menu";
import MovieDetail from "../MovieDetail/MovieDetail";

function Home(props) {
  const { MoviesDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);
  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);
  return (
    <div>
      <Intro />
      <Contents />
      <Menu />
      <MovieDetail
        movie={MoviesDetail}
        showModal={MoviesDetail ? true : false}
      />
    </div>
  );
}

export default Home;
