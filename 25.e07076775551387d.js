"use strict";(self.webpackChunkhotelinventoryapp3=self.webpackChunkhotelinventoryapp3||[]).push([[25],{6025:(x,g,l)=>{l.r(g),l.d(g,{RoomsModule:()=>F});var d=l(9808),a=l(8113),o=l(5e3),h=l(6919),r=l(3075);function R(t,i){if(1&t&&(o.TgZ(0,"div",14),o._uU(1),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.hij(" ",e.successMessage,"\n")}}function T(t,i){1&t&&(o.TgZ(0,"div",15),o._uU(1," Amenities should be minimum 5 characters! "),o.qZA())}const b=function(){return{updateOn:"blur"}};let C=(()=>{class t{constructor(e,n){this.roomService=e,this.router=n,this.room={roomType:"",roomNumber:"",price:0,checkinTime:new Date,checkoutTime:new Date,rating:0,photos:"",amenities:""},this.successMessage=""}ngOnInit(){}AddRoom(e){this.roomService.addRooms(this.room).subscribe(n=>{this.successMessage="Room addded successfully!",e.reset()})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(h.L),o.Y36(a.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["hinv-rooms-add"]],decls:22,vars:12,consts:[["class","alert alert-success",4,"ngIf"],[3,"ngSubmit"],["roomsForm","ngForm"],[1,"form-group"],["required","","type","text","name","roomType","placeholder","Room Type",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["required","","minlength","5","maxlength","20","type","text","name","amenities","placeholder","Amenities",1,"form-control",3,"ngModel","ngModelChange"],["roomAmenitiess","ngModel"],["class","alert alert-danger",4,"ngIf"],["required","","type","number","name","price","placeholder","Room Price per night",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","text","name","photos","placeholder","Photos (Provide link)",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","datetime","name","checkinTime","placeholder","Check-in Time",1,"form-control",3,"ngModel","ngModelChange"],["required","","type","datetime","name","checkoutTime","placeholder","Check-out Time",1,"form-control",3,"ngModel","ngModelChange"],["required","","min","1","max","5","type","number","name","rating","placeholder","Rating",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert","alert-success"],[1,"alert","alert-danger"]],template:function(e,n){if(1&e){const s=o.EpF();o.YNc(0,R,2,1,"div",0),o.TgZ(1,"form",1,2),o.NdJ("ngSubmit",function(){o.CHM(s);const m=o.MAs(2);return n.AddRoom(m)}),o.TgZ(3,"div",3)(4,"input",4),o.NdJ("ngModelChange",function(m){return n.room.roomType=m}),o.qZA()(),o.TgZ(5,"div",3)(6,"input",5,6),o.NdJ("ngModelChange",function(m){return n.room.amenities=m}),o.qZA()(),o.YNc(8,T,2,0,"div",7),o.TgZ(9,"div",3)(10,"input",8),o.NdJ("ngModelChange",function(m){return n.room.price=m}),o.qZA()(),o.TgZ(11,"div",3)(12,"input",9),o.NdJ("ngModelChange",function(m){return n.room.photos=m}),o.qZA()(),o.TgZ(13,"div",3)(14,"input",10),o.NdJ("ngModelChange",function(m){return n.room.checkinTime=m}),o.qZA()(),o.TgZ(15,"div",3)(16,"input",11),o.NdJ("ngModelChange",function(m){return n.room.checkoutTime=m}),o.qZA()(),o.TgZ(17,"div",3)(18,"input",12),o.NdJ("ngModelChange",function(m){return n.room.rating=m}),o.qZA()(),o.TgZ(19,"div",3)(20,"button",13),o._uU(21," Submit "),o.qZA()()()}if(2&e){const s=o.MAs(2),c=o.MAs(7);o.Q6J("ngIf",""!==n.successMessage),o.xp6(4),o.Q6J("ngModel",n.room.roomType)("ngModelOptions",o.DdM(11,b)),o.xp6(2),o.Q6J("ngModel",n.room.amenities),o.xp6(2),o.Q6J("ngIf",null==c.errors?null:c.errors.minlength),o.xp6(2),o.Q6J("ngModel",n.room.price),o.xp6(2),o.Q6J("ngModel",n.room.photos),o.xp6(2),o.Q6J("ngModel",n.room.checkinTime),o.xp6(2),o.Q6J("ngModel",n.room.checkoutTime),o.xp6(2),o.Q6J("ngModel",n.room.rating),o.xp6(2),o.Q6J("disabled",s.invalid)}},directives:[d.O5,r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On,r.wO,r.nD,r.wV,r.qQ,r.Fd],styles:[""]}),t})();var f=l(2301);let p=(()=>{class t{constructor(e){this.configService=e,this.title=""}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(f.E))},t.\u0275cmp=o.Xpm({type:t,selectors:[["hinv-header"]],decls:2,vars:1,template:function(e,n){1&e&&(o.TgZ(0,"h1"),o._uU(1),o.qZA()),2&e&&(o.xp6(1),o.hij(" ",n.title,"\n"))},styles:[""]}),t})();var Z=l(7579),v=l(8306),u=l(520);let A=(()=>{class t{transform(e,n){return e?e.filter(s=>s.price>n):[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=o.Yjl({name:"filter",type:t,pure:!0}),t})();const _=function(t){return["/booking",t]};function M(t,i){if(1&t&&(o.TgZ(0,"tr",2)(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td"),o._uU(8),o.qZA(),o.TgZ(9,"td"),o._uU(10),o.qZA(),o.TgZ(11,"td"),o._uU(12),o.ALo(13,"number"),o.qZA(),o.TgZ(14,"td"),o._uU(15),o.ALo(16,"currency"),o.qZA(),o.TgZ(17,"td"),o._uU(18),o.ALo(19,"date"),o.qZA(),o.TgZ(20,"td"),o._uU(21),o.ALo(22,"date"),o.qZA(),o.TgZ(23,"td")(24,"button",3),o._uU(25," Book Room "),o.qZA()()()),2&t){const e=i.$implicit,n=i.even,s=i.index;o.Q6J("ngClass",n?"even":"odd"),o.xp6(2),o.Oqu(s),o.xp6(2),o.Oqu(n?"Even":"Odd"),o.xp6(2),o.Oqu(e.roomNumber),o.xp6(2),o.Oqu(e.roomType),o.xp6(2),o.Oqu(e.amenities),o.xp6(2),o.Oqu(o.xi3(13,11,e.rating,"1.0-2")),o.xp6(3),o.Oqu(o.xi3(16,14,e.price,"USD")),o.xp6(3),o.Oqu(o.lcZ(19,17,e.checkinTime)),o.xp6(3),o.Oqu(o.lcZ(22,19,e.checkoutTime)),o.xp6(3),o.Q6J("routerLink",o.VKq(21,_,e.roomNumber))}}let y=(()=>{class t{constructor(){this.roomList=[],this.title="",this.price=0,this.selectedRoom=new o.vpe}ngOnDestroy(){console.log("on destory was called")}ngOnChanges(e){console.log(e),e.title&&(this.title=e.title.currentValue.toUpperCase())}ngOnInit(){console.log("RoomsListComponent initialized with roomList:",this.roomList)}selectRoom(e){this.selectedRoom.emit(e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["hinv-rooms-list"]],inputs:{roomList:"roomList",title:"title",price:"price"},outputs:{selectedRoom:"selectedRoom"},features:[o.TTD],decls:28,vars:5,consts:[[1,"table"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"btn","btn-primary",3,"routerLink"]],template:function(e,n){1&e&&(o.TgZ(0,"h2"),o._uU(1),o.qZA(),o.TgZ(2,"table",0)(3,"thead")(4,"tr")(5,"th"),o._uU(6,"Index"),o.qZA(),o.TgZ(7,"th"),o._uU(8,"Even/Odd"),o.qZA(),o.TgZ(9,"th"),o._uU(10,"Room number"),o.qZA(),o.TgZ(11,"th"),o._uU(12,"Room type"),o.qZA(),o.TgZ(13,"th"),o._uU(14,"Amenities"),o.qZA(),o.TgZ(15,"th"),o._uU(16,"Rating"),o.qZA(),o.TgZ(17,"th"),o._uU(18,"Price"),o.qZA(),o.TgZ(19,"th"),o._uU(20,"Checkin time"),o.qZA(),o.TgZ(21,"th"),o._uU(22,"Checkout time"),o.qZA(),o.TgZ(23,"th"),o._uU(24,"Select room"),o.qZA()()(),o.TgZ(25,"tbody"),o.YNc(26,M,26,23,"tr",1),o.ALo(27,"filter"),o.qZA()()),2&e&&(o.xp6(1),o.Oqu(n.title),o.xp6(25),o.Q6J("ngForOf",o.xi3(27,2,n.roomList,n.price)))},directives:[d.sg,d.mk,a.rH],pipes:[A,d.JJ,d.H9,d.uU],styles:[""]}),t})();function q(t,i){if(1&t&&(o.TgZ(0,"div"),o._uU(1),o.ALo(2,"json"),o.qZA()),2&t){const e=o.oxw();o.xp6(1),o.hij(" ",o.lcZ(2,1,e.selectedRoom),"\n")}}let J=(()=>{class t{constructor(e,n){this.roomsService=e,this.configSerivce=n,this.totalBytes=0,this.error$=new Z.x,this.getError$=this.error$.asObservable(),this.priceFilter=new r.NI(0),this.hotelName="Hilton Hotel",this.numberOfRooms=4,this.hideRooms=!1,this.subtitle="Rooms List",this.rooms={totalRooms:4,availableRooms:2,bookedRooms:2},this.roomList=[],this.title="Rooms List",this.stream=new v.y(s=>{s.next("user 1"),s.next("user 2"),s.next("user 3"),s.complete()})}ngAfterViewChecked(){}ngAfterViewInit(){this.headerChildrenComponent.last.title="Last title"}ngDoCheck(){console.log("on changes is called (do check)")}ngOnInit(){this.roomsService.getPhotos().subscribe(e=>{switch(e.type){case u.dt.Sent:console.log("Request has been made!");break;case u.dt.ResponseHeader:console.log("Request success!");break;case u.dt.DownloadProgress:this.totalBytes+=e.loaded;break;case u.dt.Response:console.log(e.body)}}),this.stream.subscribe({next:e=>console.log(e),complete:()=>console.log("complete"),error:e=>console.log(e)}),this.stream.subscribe(e=>console.log(e)),this.subscription=this.roomsService.getRooms().subscribe(e=>{this.roomList=e})}toggle(){this.hideRooms=!this.hideRooms,this.title="room list"}selectRoom(e){this.selectedRoom=e}addRoom(){const e={roomNumber:"4",roomType:"Deluxe",amenities:"Wi-fi, Tv, Bathroom, Pool",price:500,photos:"https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I",checkinTime:new Date("16-Jun-2024"),checkoutTime:new Date("23-Jun-2024"),rating:4.31};this.roomsService.addRooms(e).subscribe(n=>{this.roomList=n})}editRoom(){const e={roomNumber:"3",roomType:"Deluxe",amenities:"Wi-fi, Tv, Bathroom, Pool",price:500,photos:"https://unsplash.com/photos/black-and-white-bed-near-brown-wooden-table-T5pL6ciEn-I",checkinTime:new Date("16-Jun-2024"),checkoutTime:new Date("23-Jun-2024"),rating:4.31};this.roomsService.editRooms(e).subscribe(n=>{this.roomList=n})}deleteRoom(){this.roomsService.delete("3").subscribe(e=>{this.roomList=e})}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(h.L,4),o.Y36(f.E))},t.\u0275cmp=o.Xpm({type:t,selectors:[["hinv-rooms"]],viewQuery:function(e,n){if(1&e&&(o.Gf(p,5),o.Gf(p,5)),2&e){let s;o.iGM(s=o.CRH())&&(n.headerComponent=s.first),o.iGM(s=o.CRH())&&(n.headerChildrenComponent=s)}},decls:13,vars:6,consts:[["type","number","placeholder","Price",1,"form-control",3,"formControl"],[3,"hidden"],[3,"roomList","price","title","selectedRoom"],[4,"ngIf"],["routerLink","add",1,"btn","btn-success"],[1,"btn","btn-success",3,"click"]],template:function(e,n){1&e&&(o._UZ(0,"hinv-header"),o.TgZ(1,"div"),o._UZ(2,"input",0),o.qZA(),o.TgZ(3,"div",1)(4,"hinv-rooms-list",2),o.NdJ("selectedRoom",function(c){return n.selectRoom(c)}),o.qZA()(),o.YNc(5,q,3,3,"div",3),o.TgZ(6,"div")(7,"button",4),o._uU(8," Add Room "),o.qZA()(),o._UZ(9,"br"),o.TgZ(10,"button",5),o.NdJ("click",function(){return n.toggle()}),o._uU(11," Toggle "),o.qZA(),o._UZ(12,"router-outlet")),2&e&&(o.xp6(2),o.Q6J("formControl",n.priceFilter),o.xp6(1),o.Q6J("hidden",n.hideRooms),o.xp6(1),o.Q6J("roomList",n.roomList)("price",n.priceFilter.value)("title",n.title),o.xp6(1),o.Q6J("ngIf",n.selectedRoom))},directives:[p,r.wV,r.Fj,r.JJ,r.oH,y,d.O5,a.rH,a.lC],pipes:[d.Ts],styles:["[_nghost-%COMP%]     .table tbody tr.even{background-color:#4682b4!important;color:#fff!important}[_nghost-%COMP%]     .table tbody tr.odd{background-color:#fff!important;color:#4682b4!important}[_nghost-%COMP%]     .table tbody tr.even td{background-color:#4682b4!important;color:#fff!important}[_nghost-%COMP%]     .table tbody tr.odd td{background-color:#fff!important;color:#4682b4!important}"]}),t})();var L=l(3688);const k=[{path:"",component:J,canActivateChild:[(()=>{class t{constructor(e){this.loginService=e}canActivateChild(e,n){return this.loginService.isAdmin}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(L.r))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()],children:[{path:"add",component:C}]}];let U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.Bz.forChild(k)],a.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[d.ez]]}),t})();var w=l(8044);let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[{provide:w.S,useValue:{title:"Room"}}],imports:[[d.ez,U,r.u5,O,r.UX]]}),t})()}}]);