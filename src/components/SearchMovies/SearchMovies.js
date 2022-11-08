import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useViewPort } from "../hooks";
import { getSearchMovie, setMovieDetail } from "../store/actions";
const useQuery = () => new URLSearchParams(useLocation().search);

function SearchMovies() {
  const [windowWithd] = useViewPort();
  const dispatch = useDispatch();
  const { SearchMovie } = useSelector((state) => state.infoMovies);
  const keywords = useQuery().get("keywords");
  console.log(keywords);
  useEffect(() => {
    if (keywords) dispatch(getSearchMovie(keywords));
  }, [keywords, dispatch]);
  console.log(SearchMovies);
  return (
    <SearchPane>
      {SearchMovie && SearchMovie.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridTemplateColumns: `repeat(${
              windowWithd > 1200
                ? 4
                : windowWithd > 768
                ? 3
                : windowWithd > 600
                ? 2
                : 1
            },auto)`,
          }}
        >
          {SearchMovie.map((movie, index) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  className="movieItem"
                  key={index}
                  onClick={() => dispatch(setMovieDetail(movie))}
                >
                  <img src={imageUrl} alt="" />
                  <span>{movie.title || movie.name}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div>
          <NotFound>Your search not found</NotFound>
        </div>
      )}
    </SearchPane>
  );
}
const SearchPane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  transition: all 0.3s linear;
  background: var(--color-background);
  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;
    &:hover .movieItem {
      opacity: 0.7;
    }
    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      trasition: all 0.3s linear;
      user-select: none;
      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: white;
      }
    }
  }
`;
const NotFound = styled.div`
  color: white;
  padding: 10rem;
  text-size: 20px;
  text-align: center;
`;
export default SearchMovies;
