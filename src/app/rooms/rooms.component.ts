import { Component } from "@angular/core";
import { Rooms } from "./Rooms";
import { CommonModule } from "@angular/common";
import { RoomList } from "./RoomList";

@Component({
	selector: "app-rooms",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./rooms.html",
	styleUrls: ["./style.css"],
})
export class RoomsComponent {
	title = "Miami Hotel";
	private numberOfRoms = 5;
	private hideRooms = false;

	changeTheme = localStorage.getItem("theme") ?? false;

	checkInTime: string = new Date().toLocaleDateString("es-AR", {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	});

	rooms: Rooms = { availableRooms: 5, totalRooms: 20 };
	roomList: RoomList[] = [
		{
			roomNumber: 1,
			roomType: "Suite",
			amenities: "WiFi, TV, Air Conditioning",
			price: 200,
			photo: "ruta/a/la/foto.jpg",
			checkInTime: this.checkInTime,
			checkOutTime: new Date("2024-02-04T10:00:00"),
		},
		{
			roomNumber: 2,
			roomType: "Standard",
			amenities: "WiFi, Parking",
			price: 100,
			photo: "ruta/a/otra/foto.jpg",
			checkInTime: this.checkInTime,

			checkOutTime: new Date("2024-02-06T11:00:00"),
		},
		{
			roomNumber: 3,
			roomType: "Suite",
			amenities: "WiFi, TV, Air Conditioning",
			price: 200,
			photo: "ruta/a/la/foto.jpg",
			checkInTime: this.checkInTime,
			checkOutTime: new Date("2024-02-04T10:00:00"),
		},
		{
			roomNumber: 4,
			roomType: "Standard",
			amenities: "WiFi, Parking",
			price: 100,
			photo: "ruta/a/otra/foto.jpg",
			checkInTime: this.checkInTime,

			checkOutTime: new Date("2024-02-06T11:00:00"),
		},
	];

	toggle() {
		this.hideRooms = !this.hideRooms;
	}

	update(up?: string, down?: string) {
		if (up) this.up();
		if (down) this.down();
	}

	private up() {
		if (!this.hideRooms) this.numberOfRoms += 1;
	}

	private down() {
		if (!this.hideRooms) this.numberOfRoms -= 1;
	}

	public getNumberOfRooms(): number {
		return this.numberOfRoms;
	}

	public getHideRooms(): boolean {
		return this.hideRooms;
	}

	public setHideRoom(): void {
		this.hideRooms = !this.hideRooms;
	}
}
