import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  private _url = "http://www.omdbapi.com/?i=";
  private _apiKey = "&apikey=8f88899";

  public getMovies(id: string): Observable<any> {
    return this._http.get<any>(this._url + id + this._apiKey);
  }
}
