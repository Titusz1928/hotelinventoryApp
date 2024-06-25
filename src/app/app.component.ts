import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // this.router.events.subscribe((event)=>{
    //   console.log(event);
    // })
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event) => {
      console.log('Navigation Started');
    });
    
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      console.log('Navigation ended');
    });
    
    this.loggerService?.Log('AppComponent.ngOnInit()');
    //this.name.nativeElement.innerText="Hilton Hotel";

    this.localStorage.setItem('name','Hilton Hotel');
  }
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   //componentRef.instance.numberOfRooms=50;
  // }
  
  title = 'hotelinventoryapp3';
  
  //role='Admin';

  //@ViewChild('user',{read:ViewContainerRef}) vcr!:ViewContainerRef;

  @ViewChild('name',{static:true}) name!:ElementRef;

  constructor(
    @Optional() private loggerService:LoggerService,
    @Inject(LocalStorageToken) private localStorage:any,
    private initService:InitService,
    private configService:ConfigService,
    private router:Router
  ){
    console.log(initService.config);
  }
}
