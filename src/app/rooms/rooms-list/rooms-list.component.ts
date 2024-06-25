import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() roomList: RoomList[] | null=[];
  @Input() title:String='';
  @Input() price=0;

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() { }
  
  ngOnDestroy(): void {
    console.log("on destory was called");
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   if(changes['title']){
    this.title=changes['title'].currentValue.toUpperCase();
   }
  }

  ngOnInit(): void {
    console.log("RoomsListComponent initialized with roomList:", this.roomList);
  }

  selectRoom(room:RoomList){
    this.selectedRoom.emit(room);
  }

}
