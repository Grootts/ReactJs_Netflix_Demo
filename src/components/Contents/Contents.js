import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNetflixOriginals,
  getTopRatedMovie,
  getTrenddingMovie,
  getActionMovie,
  getComedyMovie,
  getRomanceMovie,
} from "../store/actions";
import MovieRow from "./MovieRow";
import { FaArrowAltCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import { useScrollY } from "../hooks";

function Contents(props) {
  const ScrollToTop = () => {
    scroll.scrollToTop();
  };
  const [scrollY] = useScrollY();
  const dispatch = useDispatch();
  const {
    NetflixOriginals,
    TrenddingMovie,
    TopRatedMovie,
    ActionMovie,
    ComedyMovie,
    RomanceMovie,
  } = useSelector((state) => state.infoMovies);
  useEffect(() => {
    dispatch(getNetflixOriginals());
    dispatch(getTrenddingMovie());
    dispatch(getTopRatedMovie());
    dispatch(getRomanceMovie());
    dispatch(getComedyMovie());
    dispatch(getActionMovie());
  }, [dispatch]);
  return (
    <div>
      <MovieRow
        movies={NetflixOriginals}
        title="Netflix Originals"
        isNetflix={true}
        idSection="netflix"
      />
      <MovieRow
        movies={TrenddingMovie}
        title="Trending Moives"
        idSection="trending"
      />
      <MovieRow
        movies={TopRatedMovie}
        title="Top Rated Moives"
        idSection="rated"
      />
      <MovieRow movies={ActionMovie} title="Action Moives" idSection="action" />
      <MovieRow movies={ComedyMovie} title="Comedy Moives" idSection="comedy" />
      <MovieRow
        movies={RomanceMovie}
        title="Romance Moives"
        idSection="romance"
      />
      <GoToTop
        onClick={() => ScrollToTop()}
        style={{
          visibility: `${scrollY > 600 ? "visible" : "hidden"}`,
        }}
      >
        <FaArrowAltCircleUp />
      </GoToTop>
    </div>
  );
}
const GoToTop = styled.div`
  position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 100px;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;
export default Contents;
