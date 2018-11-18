import { NgModule, InjectionToken, ModuleWithProviders } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthService } from "./auth.service";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";
import { AuthConfigService } from './auth.config';
import { HttpClientModule } from "@angular/common/http";
import { AuthRegisterComponent } from './auth-register/auth-register.component';



@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [AuthLoginComponent, AuthRegisterComponent],
  exports: [AuthLoginComponent]
})
export class AuthModule {
  static forRoot(config: any): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        {
          provide: AuthConfigService,
          useValue: config
        }
      ]
    };
  }
}
