import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { CatalogsService } from "src/app/services/catalogs.service";
import { ModalFormComponent } from "../@modals/modal-form/modal-form.component";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  trueFalse = [
    { value: true, name: "Si" },
    { value: false, name: "No" },
  ];
  books = ["Libro 1", "Libro 2", "Libro 3"];
  civilStatus = [
    { id: 12, name: "Soltero" },
    { id: 13, name: "Casado" },
    { id: 14, name: "Unión libre" },
  ];

  form: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private catalogs: CatalogsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCivilState();
    this.createForm();
    this.listenBook();
  }

  private getCivilState() {
    this.catalogs.civilState().subscribe(console.log);
  }

  private createForm() {
    this.form = this.fb.group({
      nombres: ["", [Validators.required, customValidateSpace]],
      apellidos: ["", [Validators.required, customValidateSpace]],
      fumas: [null, [Validators.required]],
      actualmentePracticasLectura: [null, [Validators.required]],
      librosLeidosUltimosTresMeses: this.fb.array([], Validators.required),
      estadoCivil: [null],
    });
    this.form.get("librosLeidosUltimosTresMeses").disable();
  }

  private listenBook() {
    this.form
      .get("actualmentePracticasLectura")
      .valueChanges.subscribe((practice) => {
        const books = this.form.get("librosLeidosUltimosTresMeses");
        practice ? books.enable() : books.disable();
      });
  }

  openDialog(): void {
    this.dialog.open(ModalFormComponent, {
      width: "250px",
      data: this.form.valid,
    });
  }

  addBook(): void {
    const books = this.form.get("librosLeidosUltimosTresMeses") as FormArray;
    books.push(
      this.fb.group({
        book: ["", Validators.required],
      })
    );
  }

  deleteBook(i: number) {
    const books = this.form.get("librosLeidosUltimosTresMeses") as FormArray;
    books.removeAt(i);
  }

  send() {
    if (this.form.invalid) this.form.markAllAsTouched();
    this.openDialog();
  }
}

export function customValidateSpace(control: FormControl) {
  if (control.value?.length > 0 && control.value?.endsWith(" "))
    return { whitespace: true };
  return false;
}
