import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest } from "../utils/interfaces/login";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: LoginRequest): Observable<any> {
    return this.http.post("https://desa.ies-webcontent.com.mx/login", data);
  }
}
