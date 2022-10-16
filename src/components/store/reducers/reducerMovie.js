import * as Types from '../types'
const reducerMovieInitialState = {
NetflixOriginals:null,
TrenddingMovie:null,
TopRatedMovie:null,
ActionMovie:null,
ComedyMovie:null,
RomanceMovie:null
}

const reducerMovie= (state = reducerMovieInitialState, action) => {
  const{type,payload}=action;
switch (type) {
  case Types.GET_NETFLIX_ORIGINAL:
  return{...state,NetflixOriginals:payload}
  case Types.GET_TRENDDING_MOVIES:
  return{...state,TrenddingMovie:payload}
  case Types.GET_TOPRATED_MOVIES:
  return{...state,TopRatedMovie:payload}
  case Types.GET_ACTION_MOVIES:
  return{...state,ActionMovie:payload}
  case Types.GET_COMEDY_MOVIES:
  return{...state,ComedyMovie:payload}
  case Types.GET_ROMANCE_MOVIES:
  return{...state,RomanceMovie:payload}
  default:
    return state
  }
};
export default reducerMovie;
