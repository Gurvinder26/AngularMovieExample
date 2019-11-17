import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Store } from "@ngrx/store";
import { AppState } from "../ngrx-store/app.state";
import { IMovie } from "../ngrx-store/movies.model";
import * as MovieActions from "../ngrx-store/movie.actions";
import { Observable } from "rxjs";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public movies: Observable<Array<IMovie>> = this._store.select("movie");
  public movieId: FormControl = new FormControl("", Validators.required);

  constructor(
    private _apiService: ApiService,
    private _store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    // gets a movie onInit
    this.getMovie('tt1285016');
  }

  /**
   * Add movie to store
   * @param payload 
   */
  public addTutorial(payload: IMovie): void {
    this._store.dispatch(new MovieActions.AddMOVIE(payload));
  }

  /**
   * gets the movie from the api and add it to the movie store
   * @param movieId 
   */
  public getMovie(movieId: string): void  {
    this._apiService.getMovies(movieId).subscribe(
      (res) => {
        if (res && res.Title) {
           this.addTutorial(res);
        }
      },
      err => {
        console.error(err);
      });
  }
}
