import { AuthModule } from "./../../projects/auth/src/lib/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatInputModule, MatCardModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
