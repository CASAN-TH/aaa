import { Injectable, Inject, Output, EventEmitter } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
//import "rxjs/add/operator/toPromise";
import { AuthConfigService } from "./auth.config";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  jwt: JwtHelperService = new JwtHelperService();
  token:any;
  user:any;
  @Output() isLoggedIn: EventEmitter<any> = new EventEmitter();
  constructor(
    @Inject(AuthConfigService) private config: any,
    private http: HttpClient
  ) {
    // console.log(config);
  }

  login(body: any){
    return this.http
      .post(`${this.config.apiUrl}/api/auth/signin`, body)
      .toPromise();
  }
  onSuccess(token:any){
    window.localStorage.setItem(`token@${this.config.appName}-${this.config.environment}`, token);

    this.token = window.localStorage.getItem(`token@${this.config.appName}-${this.config.environment}`);
    this.user = this.token ? this.jwt.decodeToken(this.token) : null;
    this.isLoggedIn.emit(this.user);
  }
}
