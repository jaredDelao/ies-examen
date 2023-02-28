import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalNameComponent } from "../@modals/modal-name/modal-name.component";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent implements OnInit {
  name: string = "";
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalNameComponent, {
      width: "250px",
    });

    dialogRef.afterClosed().subscribe((name) => {
      console.log("The dialog was closed", name);
      this.name = name;
    });
  }
}
