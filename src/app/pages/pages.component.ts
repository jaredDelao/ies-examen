import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pages",
  template: `
    <div>
      <mat-toolbar>
        <button mat-flat-button class="mr-2" color="accent" routerLink="">Bienvenida</button>
        <button mat-flat-button class="mr-2" color="accent" routerLink="/conversations">Conversiones</button>
        <button mat-flat-button class="mr-2" color="accent" routerLink="/calculate-date">Calcular fecha</button>
        <button mat-flat-button color="accent" routerLink="/form">Formulario</button>
      </mat-toolbar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
