import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CatalogsService {
  constructor(private http: HttpClient) {}

  civilState() {
    return this.http.post(
      "http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil",
      {}
    );
  }
}
