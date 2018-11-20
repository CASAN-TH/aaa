import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import { AuthRegisterComponent } from "./auth-register.component";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule, MatIconModule, MatInputModule, MatCardModule, MatStepperModule } from "@angular/material";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AuthService } from "../auth.service";
import { AuthConfigService } from "../auth.config";

describe("AuthRegisterComponent", () => {
  let component: AuthRegisterComponent;
  let fixture: ComponentFixture<AuthRegisterComponent>;
  let firstnameEl,
  lastnameEl,
  emailEl,
  usernameEl,
  passwordEl : any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        ReactiveFormsModule.withConfig({
          warnOnNgModelWithFormControl: "never"
        }),
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatStepperModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
        { provide: AuthConfigService }
      ],
      declarations: [AuthRegisterComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AuthRegisterComponent);
    component = fixture.componentInstance;
    firstnameEl = fixture.nativeElement.querySelector("input[name=firstname]");
    lastnameEl = fixture.nativeElement.querySelector("input[name=lastname]");
    emailEl = fixture.nativeElement.querySelector("input[name=email]");
    usernameEl = fixture.nativeElement.querySelector("input[name=username]");
    passwordEl = fixture.nativeElement.querySelector("input[name=password]");
    fixture.autoDetectChanges();
  }));

  beforeEach(() => {});

  it("ผู้ใชเปิดหน้าจอ เพื่อลงทะเบียนเข้าใช้งาน", () => {

    expect(component).toBeTruthy();
    // expect(usernameEl.value).toBe(
    //   component.credential.username,
    //   "ยังไม่มี input usermane"
    // );
    // expect(usernameEl.required).toBe(true, "ยังไม่มี require input usermane");
    // expect(passwordEl.value).toBe(
    //   component.credential.password,
    //   "ยังไม่มี input password"
    // );
    // expect(passwordEl.required).toBe(true, "ยังไม่มี require input password");

  });
});
