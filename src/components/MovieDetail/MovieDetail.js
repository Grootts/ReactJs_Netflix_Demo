import moment from "moment/moment";
import React from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setMovieDetail } from "../store/actions";
//const showModal=false;

function MovieDetail(props) {
  const { movie, showModal } = props;
  const dispatch = useDispatch();
  const handleCloseDetail = () => {
    dispatch(setMovieDetail(null));
  };
  return (
    <MovieDetailModal>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
        onClick={() => handleCloseDetail()}
      ></div>
      <div
        className={`modal ${showModal ? "showModal" : "hideModal"}`}
        style={
          movie
            ? {
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path ||
                  movie.poster_path})`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">
              {movie && (movie.title || movie.name)}
            </h1>
            <p className="statistical">
              <span className="rating">
                Rating: {movie && movie.vote_average * 10}%
              </span>
              <span className="popularity">{movie && movie.popularity}</span>
            </p>
            <p className="releaseDate">
              Release Date:{" "}
              {movie &&
                (moment(movie.release_date).format("DD/MM/YYYY") ||
                  moment(movie.first_air_date).format("DD/MM/YYYY"))}
            </p>
            <p className="runtime">Run time:{movie && movie.runtime}</p>
            <p className="overview">Overview: {movie && movie.overview}</p>
          </div>
        </div>
      </div>
    </MovieDetailModal>
  );
}
const fadeIn = keyframes`
0%:{background:rgba(0,0,0,0)};
100%:{background:rgba(0,0,0,0.6)}
`;
const MovieDetailModal = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
    user-select: none;
  }
  .showBackdrop {
    display: block;
  }
  .hideBackdrop {
    display: none;
  }
  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 300;
    height: 70%;
    width: 100%;
    margin: 0 auto;
    color: white;
    user-select: none;
    box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
    transition: 0.3s ease;
    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }
  }
  .container {
    position: fixed;
    width: 70%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.94), 60%, transparent);
    @media screen and (max-width: 1184px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.95), 40%, transparent);
      width: 88%;
    }
    @media screen and (max-width: 900px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.95), 50%, transparent);
      width: 100%;
    }
    @media screen and (max-width: 600px) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.95), 60%, transparent);
    }
    .movieInfo {
      width: 65%;
      height: 100%;
      padding-left: 24px;
      color: white;
      font-size: 20px;
      padding-tp: 30px;
    }
    .movieTitle {
      margin-top: 30px;
    }
    .statistical {
      margin-top: 20px;
      display: flex;
    }
  }
  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-in-out;
  }
  .hideModal {
    top: 0;
    opacity: 0;

    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
`;
export default MovieDetail;
