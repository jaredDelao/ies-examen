import { NgModule, LOCALE_ID } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ConversationsComponent } from "./conversations/conversations.component";
import { CalculateDateComponent } from "./calculate-date/calculate-date.component";
import { FormComponent } from "./form/form.component";
import { MatButtonModule } from "@angular/material/button";
import { ModalNameComponent } from "./@modals/modal-name/modal-name.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";

import { ChangeLettersPipe } from "../utils/pipes/change-letters.pipe";
import { OnlyNumberDirective } from "../utils/directives/only-number.directive";

import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
import { ModalFormComponent } from './@modals/modal-form/modal-form.component';
registerLocaleData(localeEs, "es");

const MATERIAL_MODULES = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatListModule,
];

@NgModule({
  declarations: [
    PagesComponent,
    WelcomeComponent,
    ConversationsComponent,
    CalculateDateComponent,
    FormComponent,
    ModalNameComponent,
    ChangeLettersPipe,
    OnlyNumberDirective,
    ModalFormComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, ...MATERIAL_MODULES],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "es-MX" },
    { provide: LOCALE_ID, useValue: "es" },
  ],
})
export class PagesModule {}
