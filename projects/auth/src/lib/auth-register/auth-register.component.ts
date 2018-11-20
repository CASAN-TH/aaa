import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "auth-register",
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>ลงชื่อเข้าใช้</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <mat-vertical-stepper [linear]="isLinear" #stepper>
          <mat-step [stepControl]="profileFormGroup">
            <form [formGroup]="profileFormGroup">
              <ng-template matStepLabel>ข้อมูลของฉัน</ng-template>
              <div>
                <mat-form-field class="full-width">
                  <input
                    matInput
                    placeholder="ชื่อ"
                    type="text"
                    name="firstname"
                    [(ngModel)]="credential.firstName"
                    formControlName="firstname"
                    required
                  />
                </mat-form-field>
              </div>
              <div>
                <mat-form-field class="full-width">
                  <input
                    matInput
                    placeholder="นามสกุล"
                    type="text"
                    name="lastname"
                    [(ngModel)]="credential.lastName"
                    formControlName="lastname"
                    required
                  />
                </mat-form-field>
              </div>
              <div>
                <mat-form-field class="full-width">
                  <input
                    matInput
                    placeholder="อีเมล์"
                    type="email"
                    name="email"
                    [(ngModel)]="credential.email"
                    formControlName="email"
                    required
                    email
                  />
                </mat-form-field>
              </div>
              <div>
                <button
                  mat-flat-button
                  color="primary"
                  class="full-width"
                  matStepperNext
                >
                  ถัดไป
                </button>
              </div>
            </form>
          </mat-step>
          <mat-step [stepControl]="accountFormGroup">
            <form [formGroup]="accountFormGroup">
              <ng-template matStepLabel>ข้อมูลผู้ใช้งาน</ng-template>
              <div>
                <mat-form-field class="full-width">
                  <input
                    matInput
                    name="username"
                    placeholder="ชื่อผู้ใช้"
                    type="text"
                    [(ngModel)]="credential.username"
                    formControlName="username"
                    required
                  />
                </mat-form-field>
              </div>
              <div>
                <mat-form-field class="full-width">
                  <input
                    matInput
                    placeholder="รหัสผ่าน"
                    type="password"
                    name="password"
                    [(ngModel)]="credential.password"
                    formControlName="password"
                    required
                  />
                </mat-form-field>
              </div>
              <div class="row">
                <div class="col-6">
                  <button
                    mat-stroked-button
                    class="full-width"
                    matStepperPrevious
                  >
                    ย้อนกลับ
                  </button>
                </div>
                <div class="col-6">
                  <button
                    mat-flat-button
                    color="primary"
                    class="full-width"
                    matStepperNext
                    (click)="onRegister()"
                  >
                    สร้างบัญชีผู้ใช้งาน
                  </button>
                </div>
              </div>
            </form>
          </mat-step>
        </mat-vertical-stepper>
      </mat-card-content>
      <mat-card-actions>
        <p class="register">
          มีบัญชีอยู่แล้ว?
          <button
            name="btn-login"
            mat-button
            class="full-width"
            (click)="gotoLogin()"
          >
            เข้าสู่ระบบ
          </button>
        </p>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
    `
      .register-form {
        width: 100%;
      }
      .full-width {
        width: 100%;
      }
    `
  ]
})
export class AuthRegisterComponent implements OnInit {
  credential: any = {
    firstName: ""
  };
  isLinear = true; // set true for required field
  accountFormGroup: FormGroup;
  profileFormGroup: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.authService.isLoggedIn.subscribe(value => {
      console.log(this.authService.user);
    });
  }

  ngOnInit() {
    this.accountFormGroup = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.profileFormGroup = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }

  async onRegister() {
    try {
      const resp: any = await this.authService.register(this.credential);
      if (resp) {
        this.authService.onSuccess(resp.token);
      }
    } catch (error) {
      //throw error;
    }
  }

  gotoLogin() {
    this.router.navigate(["/login"]);
  }
}
