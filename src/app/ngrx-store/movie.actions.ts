import { Action } from "@ngrx/store";
import { IMovie } from "./movies.model";

export const ADD_MOVIE = "[MOVIE] Add";
export const REMOVE_MOVIE = "[MOVIE] Remove";

export class AddMOVIE implements Action {
  readonly type = ADD_MOVIE;

  constructor(public payload: IMovie) {}
}

export class RemoveMOVIE implements Action {
  readonly type = REMOVE_MOVIE;

  constructor(public payload: number) {}
}

export type Actions = AddMOVIE | RemoveMOVIE;
