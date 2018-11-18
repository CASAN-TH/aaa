import { NgModule, InjectionToken, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AuthService } from "./auth.service";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatStepperModule
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
    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule.withConfig({
      warnOnNgModelWithFormControl: "never"
    }),
  ],
  declarations: [AuthLoginComponent, AuthRegisterComponent],
  exports: [AuthLoginComponent, AuthRegisterComponent]
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
