import { AuthService } from "./../auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "auth-login",
  template: `
    <form class="login-form">
      <mat-card>
        <mat-card-header>
          <mat-card-title>ลงชื่อเข้าใช้</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <mat-form-field class="full-width">
            <input
              type="text"
              matInput
              placeholder="ชื่อผู้ใช้/เบอร์โทร/email"
              name="username"
              [(ngModel)]="credential.username"
              required
            />
          </mat-form-field>

          <mat-form-field class="full-width">
            <input
              matInput
              placeholder="รหัสผ่าน"
              [type]="hide ? 'password' : 'text'"
              name="password"
              [(ngModel)]="credential.password"
              required
            />
            <mat-icon matSuffix (click)="hide = !hide">{{
              hide ? "visibility_off" : "visibility"
            }}</mat-icon>
          </mat-form-field>

          <div class="row">
            <div class="col-6"><mat-checkbox>จดจำฉันไว้</mat-checkbox></div>
            <div class="col-6 text-right">
                     </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button
            name="btn-login"
            mat-flat-button
            color="primary"
            class="full-width"
            (click)="onLogin()"
            [disabled]="!credential.username || !credential.password">
            เข้าสู่ระบบ
          </button>
          <div class="row pt-2">
            <div class="col-12 text-center">
              <button
                name="btn-register"
                mat-button
                class="full-width"
                (click)="gotoRegister()">ลงทะเบียน</button>
            </div>
          </div>
        </mat-card-actions>
      </mat-card>
    </form>
  `,
  styles: [
    `
      .login-form {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }

      .full-width {
        width: 100%;
      }
      .cover {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .mat-card:not([class*=mat-elevation-z]) {
      box-shadow:none;
    `
  ]
})
export class AuthLoginComponent implements OnInit {
  hide = true;
  credential: any = {
    username: "",
    password: ""
  };
  constructor(private router: Router, private authService: AuthService) {
    this.authService.isLoggedIn.observers = [];
    this.authService.isLoggedIn.subscribe(value => {
      console.log(this.authService.user);
    });
  }

  ngOnInit() { }

  async onLogin() {
    try {
      const resp: any = await this.authService.login(this.credential);
      if (resp) {
        this.authService.onSuccess(resp.token);
        this.credential = {
          username: "",
          password: ""
        };
      }
    } catch (error) {
      // throw error;
      this.authService.onFail(error);
    }
  }

  gotoRegister() {
    this.router.navigate(["/register"]);
  }

  gotoForgot() {
    this.router.navigate(["/forgot"]);
  }
}
