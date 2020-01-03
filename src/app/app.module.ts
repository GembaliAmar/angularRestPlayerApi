import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CricketApiComponent } from "./cricket-api/cricket-api.component";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, CricketApiComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{ path: " ", component: CricketApiComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
