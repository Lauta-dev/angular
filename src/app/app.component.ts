import { Component } from "@angular/core";
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RoomsComponent, CommonModule],
	// Cargar un archivo HTML
	templateUrl: "./app.component.html",
	styleUrl: "./style.css",
})
export class AppComponent {
	title = "Nose";
	description = "description";

	loginType = "admin";
}
