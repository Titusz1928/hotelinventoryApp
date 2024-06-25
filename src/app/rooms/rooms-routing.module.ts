import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsComponent } from './rooms.component';
import { RoomGuard } from './guards/room.guard';

// const routes: Routes = [
//   {path:'rooms',component:RoomsComponent, children:[]},
//   {path:'rooms/add',component:RoomsAddComponent},
//   {path:'rooms/:id',component:RoomsBookingComponent},
// ];

// const routes: Routes = [
//   {
//     path:'room',
//     component:RoomsComponent,
//      children:[{path:':id',component:RoomsBookingComponent} ],
//   },
//   {path:'rooms/add',component:RoomsAddComponent},
// ];

const routes: Routes = [
  {
    path:'',
    component:RoomsComponent,
    canActivateChild:[RoomGuard],
     children:[
      {path:'add',component:RoomsAddComponent},
      //{path:':id',component:RoomsBookingComponent}
     ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
