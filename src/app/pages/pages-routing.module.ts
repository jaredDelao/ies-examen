import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalculateDateComponent } from "./calculate-date/calculate-date.component";
import { ConversationsComponent } from "./conversations/conversations.component";
import { FormComponent } from "./form/form.component";
import { PagesComponent } from "./pages.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "", component: WelcomeComponent },
      { path: "conversations", component: ConversationsComponent },
      { path: "calculate-date", component: CalculateDateComponent },
      { path: "form", component: FormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
