import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-name",
  templateUrl: "./modal-name.component.html",
  styleUrls: ["./modal-name.component.scss"],
})
export class ModalNameComponent implements OnInit {
  name: string = "";
  constructor() {}

  ngOnInit(): void {}
}
