import { AuthModule } from './../../projects/auth/src/lib/auth.module';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from "@angular/router/testing";
describe('AppComponent', () => {
  const config = {
    production: false,
    environment: "dev",
    appName: "schoolhub",
    apiUrl: "http://localhost:3000"
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthModule.forRoot(config), RouterTestingModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'aaa'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('aaa');
  }));
});
