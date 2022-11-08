import { useSelector } from "react-redux";
import MovieDetail from "../MovieDetail/MovieDetail";
import SearchMovies from "../SearchMovies/SearchMovies";

function Search() {
  const { MoviesDetail } = useSelector((state) => state.infoMovies);
  return (
    <div>
      <SearchMovies />
      <MovieDetail
        movie={MoviesDetail}
        showModal={MoviesDetail ? true : false}
      />
    </div>
  );
}

export default Search;
