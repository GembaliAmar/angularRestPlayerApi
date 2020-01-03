import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-cricket-api",
  templateUrl: "./cricket-api.component.html",
  styleUrls: ["./cricket-api.component.css"]
})
export class CricketApiComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerFinder?apikey=Qxg5rsF0rzNjQwvHPtMw6sUmQv82&name=";
  constructor(private http: HttpClient) {}
  playerInfo = [];

  searchPlayer(player) {
    this.http.get<any>(`${this.playerUrl}${player}`).subscribe(user => {
      // console.log(user);
      // this.playerInfo.push(user.data);
      this.playerInfo = user.data;
    });
  }
  ngOnInit() {}
}
