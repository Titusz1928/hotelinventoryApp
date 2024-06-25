import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;

  successMessage:string="";

  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private configService:ConfigService,
    private fb:FormBuilder,
    private bookingService:BookingService,
    private route:ActivatedRoute,
  ) { }

    ngOnInit(): void {
      const roomId=this.route.snapshot.paramMap.get('roomid');
      this.bookingForm = this.fb.group({
        roomId: new FormControl({ value: roomId, disabled: true }, [Validators.required]),
        guestEmail: new FormControl('', {
          validators: [Validators.required, Validators.email],
          updateOn: 'blur'
        }),
        checkinDate: new FormControl('',{validators:[Validators.required]}),
        checkoutDate: new FormControl('',{validators:[Validators.required]}),
        bookingStatus: new FormControl(''),
        bookingAmount: new FormControl(''),
        bookingDate: new FormControl(''),
        mobileNumber: new FormControl(''),
        guestName: new FormControl('', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar(';')]),
        address: this.fb.group({
          addressLine1: new FormControl('',{validators:[Validators.required]}),
          addressLine2: new FormControl(''),
          City: new FormControl('',{validators:[Validators.required]}),
          State: new FormControl('',{validators:[Validators.required]}),
          Country: new FormControl('',{validators:[Validators.required]}),
          ZipCode: new FormControl('',{validators:[Validators.required]}),
        }),
        guests: this.fb.array([this.createGuest()]),
        tnc: new FormControl(false, [Validators.requiredTrue]),
      }
      ,{
        //updateOn:'blur',
        validators:[CustomValidator.validataDate]
      }
    );

      //this.getBookingData();

      // this.bookingForm.valueChanges.subscribe((data)=>{
      //   this.bookingService.bookRoom(data).subscribe((data)=>{ })
      //   //console.log(data);
      // });

      this.bookingForm.valueChanges.pipe(
        //mergeMap((data)=>this.bookingService.bookRoom(data))
        //switchMap((data)=>this.bookingService.bookRoom(data))
        exhaustMap((data)=>this.bookingService.bookRoom(data))
      ).subscribe((data)=>console.log(data));
    }

  addBooking(){
    console.log(this.bookingForm.getRawValue());
    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=>{
      console.log(data);
    })
    
    this.bookingForm.reset({
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address:{
        addressLine1:'',
        addressLine2:'',
        City: '',
        State: '',
        Country:'',
        ZipCode: '',
      },
      guests: [],
      tnc:false,
    });
    this.successMessage="Room booked successfully!";
  }

  getBookingData(){
    this.bookingForm.patchValue({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address:{
        addressLine1:'',
        addressLine2:'',
        City: '',
        State: '',
        Country:'',
        ZipCode: '',
      },
      guests: [],
      tnc:false,
    });
  }

  addGuest(){
    this.guests.push(this.createGuest());
  }

  private createGuest() {
    return this.fb.group({
      guestName: ['',{validators:[Validators.required]}],
      age: new FormControl(''),
    });
  }

  removeGuest(i:number){
    this.guests.removeAt(i);
  }

  addPassport(){
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport(){
    this.bookingForm.removeControl('passport');
  }

}


