import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { AuthLoginComponent } from "./auth-login.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatCheckboxModule,
  MatIconModule,
  MatInputModule,
  MatCardModule
} from "@angular/material";
import { AuthService } from "../auth.service";
import { AuthConfigService } from "../auth.config";
describe("AuthComponent", () => {
  let component: AuthLoginComponent;
  let fixture: ComponentFixture<AuthLoginComponent>;
  let usernameEl, passwordEl, loginButtonEl;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        HttpClientTestingModule
      ],
      providers: [
        AuthService,
        { provide: AuthConfigService }
      ],
      declarations: [AuthLoginComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(AuthLoginComponent);
    component = fixture.componentInstance;
    usernameEl = fixture.nativeElement.querySelector("input[name=username]");
    passwordEl = fixture.nativeElement.querySelector("input[name=password]");
    loginButtonEl = fixture.nativeElement.querySelector("button");
    fixture.detectChanges();
  }));

  beforeEach(() => {});

  it("ผู้ใช้เปิดหน้าจอ ลงชื่อเข้าใช้", () => {
    expect(component).toBeTruthy();
    expect(component.ngOnInit).toBeDefined("ยังไม่ได้ สร้าง method ngOnInit");
    expect(component.onLogin).toBeDefined("ยังไม่ได้ สร้าง method onLogin");
    expect(component.credential).toBeDefined(
      "ยังไม่ได้ ประกาศ property credential"
    );

    expect(usernameEl.value).toBe(
      component.credential.username,
      "ยังไม่มี input usermane"
    );
    expect(usernameEl.required).toBe(true, "ยังไม่มี require input usermane");
    expect(passwordEl.value).toBe(
      component.credential.password,
      "ยังไม่มี input password"
    );
    expect(passwordEl.required).toBe(true, "ยังไม่มี require input password");
    expect(loginButtonEl.textContent).toContain(
      "เข้าสู่ระบบ",
      "ยังไม่มี button login เข้าสู่ระบบ"
    );
    expect(loginButtonEl.disabled).toBe(true, "ยังไม่ disable ปุ่ม");
  });

  it("ผู้ใช้กรอก username password และ กดปุ่ม Login", () => {
    usernameEl.value = "test@example.com";
    passwordEl.value = "1234";
    usernameEl.dispatchEvent(new Event("input"));
    passwordEl.dispatchEvent(new Event("input"));

    expect(component.credential.username).toBe("test@example.com");
    expect(component.credential.password).toBe("1234");
    fixture.detectChanges();
    expect(loginButtonEl.disabled).toBe(false, "ยังไม่ enabled ปุ่ม");

    // loginButtonEl.dispatchEvent(new Event("click"));
    // fixture.detectChanges();
    // expect(component.credential.username).toBe("");
    // expect(component.credential.password).toBe("");
    // expect(loginButtonEl.disabled).toBe(true, "ยังไม่ disable ปุ่ม");
  });
});
