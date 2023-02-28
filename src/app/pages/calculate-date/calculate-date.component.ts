import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-calculate-date",
  templateUrl: "./calculate-date.component.html",
  styleUrls: ["./calculate-date.component.scss"],
})
export class CalculateDateComponent implements OnInit {
  options = [
    { id: 1, name: "Día" },
    { id: 2, name: "Mes" },
    { id: 3, name: "Año" },
  ];

  dateValue = new FormControl({ value: null }, Validators.required);
  optionValue = new FormControl(null, Validators.required);
  quantityValue = new FormControl(null, Validators.required);

  finalDate: any;

  constructor() {}

  ngOnInit(): void {
    this.listeners();
  }

  listeners() {
    this.dateValue.valueChanges.subscribe((date: Date) => {
      if (this.optionValue.valid && this.quantityValue.valid)
        this.setValue(date);
    });

    this.optionValue.valueChanges.subscribe((opt) => {
      if (this.dateValue.valid && this.quantityValue.valid)
        this.setValue(this.dateValue.value);
    });

    this.quantityValue.valueChanges.subscribe((qty) => {
      if (this.dateValue.valid && this.optionValue.valid && qty)
        this.setValue(this.dateValue.value);
      else this.finalDate = null;
    });
  }

  setValue(date: Date): void {
    let result = new Date(date);
    if (this.optionValue.value === 1) {
      result.setDate(result.getDate() + Number(this.quantityValue.value));
    }
    if (this.optionValue.value === 2) {
      result.setMonth(result.getMonth() + Number(this.quantityValue.value));
    }
    if (this.optionValue.value === 3) {
      result.setFullYear(
        result.getFullYear() + Number(this.quantityValue.value)
      );
    }
    this.finalDate = result;
  }
}
