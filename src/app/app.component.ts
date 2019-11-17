import { Component } from "@angular/core";

import * as _moment from "moment";
const moment = _moment;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public title: string = "angularMovieExample";
  public showLinks: boolean = false;
  public dateFormat: string = "MMM DD, YYYY, HH:mm:ss A ";

  /**
   * creates a url with current date
   */
  public get currentUrl() {
    return "/profile/1234/" + moment(new Date()).format(this.dateFormat);
  }
}
