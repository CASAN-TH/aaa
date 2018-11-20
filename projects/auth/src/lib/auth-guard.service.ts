import { Injectable, Inject } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthConfigService } from "./auth.config";

@Injectable({ providedIn: "root" })
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    @Inject(AuthConfigService) private config: any
  ) {}

  canActivate(): boolean {
    console.log("AuthGuard.canActivate is called");
    const token = window.localStorage.getItem(
      `token@${this.config.appName}-${this.config.environment}`
    );

    if (token) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
