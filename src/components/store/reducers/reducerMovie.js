import * as Types from '../types'
const reducerMovieInitialState = {
NetflixOriginals:null,
}

const reducerMovie= (state = reducerMovieInitialState, action) => {
  const{type,payload}=action;
switch (type) {
  case Types.GET_NETFLIX_ORIGINAL:
  return{...state,NetflixOriginals:payload}
 

  default:
    return state
  }
};
export default reducerMovie;
