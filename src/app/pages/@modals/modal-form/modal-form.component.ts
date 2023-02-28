import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-modal-form",
  templateUrl: "./modal-form.component.html",
  styleUrls: ["./modal-form.component.scss"],
})
export class ModalFormComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Boolean
  ) {}

  alertTitle = this.data
    ? "El formulario se ha llenado correctamente"
    : "Hubo un error al llenar el formulario";

}
