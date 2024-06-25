import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList:RoomList[]=[];

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config:AppConfig,
    private http:HttpClient
  ) {
    console.log(config.apiEndpoint);
    console.log("Room service initialized...");
   }

  //constructor(){}

  //headers = new HttpHeaders({'token':'324ih32ohe9'});
  //getRooms$ = this.http.get<RoomList[]>('/api/rooms',{headers:this.headers}).pipe(

  //!!!!!!!!!!!!
  // getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
  //   shareReplay(1)
  // );

  getRooms(){
    return this.http.get<RoomList[]>('/api/rooms');
  }


  addRooms(room:RoomList){
    return this.http.post<RoomList[]>('/api/rooms',room);
  }

  editRooms(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string): Observable<RoomList[]> {
    return this.http.delete<RoomList[]>(`api/rooms//${id}`);
  }

  getPhotos(){
    const request = new HttpRequest('GET',`https://jsonplaceholder.typicode.com/photos`,{
      reportProgress:true,
    })
    return this.http.request(request);
  }

  
}
