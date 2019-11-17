import { IMovie } from './movies.model';

export interface AppState {
  readonly movie: IMovie[];
}