import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { RoomList, Rooms } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(
    @SkipSelf() private roomsService:RoomsService,
    private configSerivce:ConfigService
  ) {

   }

  ngAfterViewChecked(): void {
    
  }
  ngAfterViewInit(): void {
    //this.headerComponent.title="Rooms View";
    this.headerChildrenComponent.last.title="Last title";
  }
  ngDoCheck(): void {
    console.log("on changes is called (do check)");
  }

  totalBytes=0;

  subscription !: Subscription;

  error$  = new Subject<string>();

  getError$ = this.error$.asObservable();

  priceFilter = new FormControl(0);

//!!!!!!!!!!!!!!!!!!!
  // rooms$ = this.roomsService.getRooms$.pipe(
  //   catchError((err) => {
  //     //console.log(err);
  //     this.error$.next(err.message);
  //     return of([]);
  //   })
  // );

  // roomCount$ = this.roomsService.getRooms$.pipe(
  //   map((rooms)=>rooms.length)
  // )

  ngOnInit(): void {
    //console.log(this.headerComponent);
    //this.roomList=this.roomsService.getRooms();
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log("Request has been made!");
          break;
    
        case HttpEventType.ResponseHeader:
          console.log("Request success!");
          break;
    
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded;
          break;
    
        case HttpEventType.Response:
          console.log(event.body);
          break;
    
        default:
          break;
      }
    });



    this.stream.subscribe({
      next:(value) => console.log(value),
      complete:() => console.log("complete"),
      error:(err)=>console.log(err)
    });
    this.stream.subscribe((data)=>console.log(data));

    //!!!!!!!!!!
    // this.subscription = this.roomsService.getRooms$.subscribe(rooms => {
    //   //console.log('Received rooms:', rooms);
    //   this.roomList=rooms;
    // });

    this.subscription = this.roomsService.getRooms().subscribe(rooms => {
      //console.log('Received rooms:', rooms);
      this.roomList=rooms;
    });
  }

  hotelName = 'Hilton Hotel';
  numberOfRooms = 4;
  hideRooms = false;

  subtitle="Rooms List";

  rooms: Rooms = {
    totalRooms: 4,
    availableRooms: 2,
    bookedRooms: 2
  };

  roomList : RoomList[]=[];

  toggle(){
    this.hideRooms=!this.hideRooms;
    this.title="room list";
  }

  selectedRoom!:RoomList;

  selectRoom(room:RoomList){
    this.selectedRoom=room;
  }

  addRoom(){
    const room:RoomList={ 
      roomNumber: '4',
      roomType: 'Deluxe',
      amenities: 'Wi-fi, Tv, Bathroom, Pool',
      price: 500,
      photos: 'https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I',
      checkinTime: new Date('16-Jun-2024'),
      checkoutTime: new Date('23-Jun-2024'),
      rating: 4.31
    };
    //this.roomList.push(room);
    //this.roomList = [...this.roomList,room];
    this.roomsService.addRooms(room).subscribe((data)=>{
      this.roomList=data;
    });
  }

 title='Rooms List';

 //@ViewChild(HeaderComponent, {static:true}) headerComponent!:HeaderComponent;
 @ViewChild(HeaderComponent) headerComponent!:HeaderComponent;

 @ViewChildren(HeaderComponent) headerChildrenComponent!:QueryList<HeaderComponent>

 stream = new Observable(observer=>{
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3');
    observer.complete();
    //observer.error('error');
 })

  editRoom() {
    const room:RoomList={ 
      roomNumber: '3',
      roomType: 'Deluxe',
      amenities: 'Wi-fi, Tv, Bathroom, Pool',
      price: 500,
      photos: 'https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I',
      checkinTime: new Date('16-Jun-2024'),
      checkoutTime: new Date('23-Jun-2024'),
      rating: 4.31
    };
    this.roomsService.editRooms(room).subscribe((data)=>{
      this.roomList=data;
    });
  }

  deleteRoom(){
    this.roomsService.delete('3').subscribe((data)=>{
      this.roomList=data;
    });
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe;
    }
  }
}
