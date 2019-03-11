import { environment } from './../environments/environment';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";

import {
  AuthModule
} from "../../projects/auth/src/lib/auth.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';


const authSrvCfg = environment
const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    AuthModule.forRoot(authSrvCfg)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
