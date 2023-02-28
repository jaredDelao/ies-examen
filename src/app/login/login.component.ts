import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({});
  isErrorLogin: boolean = false;
  subscribe = new Subscription();
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  private createForm() {
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  login(): boolean | void {
    if (!this.form.valid) return (this.isErrorLogin = true);

    const { username, password } = this.form.getRawValue();
    this.subscribe = this.loginService
      .login({ username, password })
      .subscribe((res) => {
        console.log(res);
      });
    if (username === "carlos.oviedo" && password === "$oyAdmin666") {
      localStorage.setItem("user", username);
      this.router.navigateByUrl("/");
    } else {
      this.isErrorLogin = true;
    }
  }
}
