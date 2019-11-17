import { IMovie } from "./movies.model";
import * as MovieActions from "./movie.actions";
import * as _ from "lodash";

export function movieReducer(
  state: IMovie[] = [],
  action: MovieActions.Actions
) {
  if (action.type === MovieActions.ADD_MOVIE) {
    console.log(action.payload);
    const movieExist: boolean = state.some(movie => {
      return _.isEqual(movie, action.payload);
    });
    if (movieExist) {
      return state;
    } else {
      return [...state, action.payload];
    }
  } else {
    return state;
  }
}
