import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


export interface IDisplayParams {
  userId: string;
  date: string;
}

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  public params: IDisplayParams = { userId: "", date: "" };
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.params.userId = params["user-id"];
      this.params.date =  params["date"];
    });
  }
}
