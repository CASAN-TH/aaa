import { AuthModule } from './auth.module';
import { TestBed, inject } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { AuthService } from "./auth.service";
import { AuthConfigService } from "./auth.config";

describe("AuthService", () => {
  let httpMock: HttpTestingController;
  const config = {
    production: false,
    environment: "dev",
    appName: "schoolhub",
    apiUrl: "http://localhost:3000"
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AuthModule.forRoot(config)],
      providers: [AuthService, { provide: AuthConfigService, }]
    });
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  xit("should be login", inject([AuthService], (service: AuthService) => {
    service.login({ name: "test" }).then((data: any) => {
      expect(data).toBeTruthy();
      expect(data.status).toBe(200);
    });

    const request = httpMock.expectOne(`http/api/tests`);
    expect(request.request.method).toBe("POST");
    request.flush({ status: 200, data: { name: "test" } });
    httpMock.verify();
  }));
});
