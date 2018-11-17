import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthLoginComponent } from "./auth-login.component";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatStepperModule,
  MatMenuModule,
  MatSidenavModule,
  MatTabsModule,
  MatTreeModule,
  MatProgressBarModule,
  MatExpansionModule
} from "@angular/material";
@NgModule({
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatTreeModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  declarations: [AuthLoginComponent],
  exports: [AuthLoginComponent]
})
export class AuthModule {}
