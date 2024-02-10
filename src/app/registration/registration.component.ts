import { Component } from '@angular/core';
import { Registration } from './models/registration';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // registration = new Registration(undefined, '', '', '', new Date("2020-02-23").toISOString().split('T')[0], '', '', '', '', '', '', '', '');
  registration = new Registration();
  countriesList: string[] = ['India', 'United States', 'United Kingdom'];
  statesByCountry: { [key: string]: string[] } = {
    'India': ['Delhi', 'Maharashtra', 'Karnataka'],
    'United States': ['New York', 'California', 'Texas'],
    'United Kingdom': ['England', 'Scotland', 'Wales']
  };

  submitted = false;

  constructor(private registerService: RegistrationService) { }

  //returning selected country and then fetches the corresponding list of states associated with that country
  get statesList() {
    return this.statesByCountry[this.registration.country] || [];
  }

  onSubmit() {
    console.log(this.registration);
    this.registerService.enroll(this.registration).subscribe(
      (data: any) => console.log('Success!', data),
      (error: any) => console.error('Error!', error)
    );
  }
}
