import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomsService } from '../services/rooms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  room:RoomList={
    roomType:'',
    roomNumber:'',
    price:0,
    checkinTime:new Date(),
    checkoutTime:new Date(),
    rating:0,
    photos:'',
    amenities:''
  }

  successMessage:string="";

  constructor(private roomService:RoomsService, private router:Router) { }

  ngOnInit(): void {
  }

  AddRoom(roomsForm : NgForm){
    this.roomService.addRooms(this.room).subscribe((data)=>{
      this.successMessage="Room addded successfully!";
      roomsForm.reset();
      //this.router.navigate(['/rooms']);
    });
  }

}
