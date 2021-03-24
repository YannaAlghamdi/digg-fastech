import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private form: FormGroup;
  private nationalities: Array<string>;
  private countries: Array<string>;
  isMaleChecked: any;
  isFemaleChecked: any;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      country: ['', Validators.required],
      contactNo: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]]
    });

    this.nationalities = [
      'Afghan',
      'Albanian',
      'Algerian',
      'Australian',
      'Filipino'
    ];

    this.countries = [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Australia',
      'Philippines'
    ];
  }

  setGender(gender: string) {
    this.isMaleChecked = gender == 'male' ? true : false;
    this.isFemaleChecked = gender == 'female' ? true : false;
    this.form.get('gender').setValue(gender);
  }

  submit() {
    localStorage.setItem('firstName', this.form.get('firstName').value);
    localStorage.setItem('lastName', this.form.get('lastName').value);
    localStorage.setItem('birthdate', this.form.get('birthdate').value);
    localStorage.setItem('gender', this.form.get('gender').value);
    localStorage.setItem('nationality', this.form.get('nationality').value);
    localStorage.setItem('country', this.form.get('country').value);
    localStorage.setItem('contactNo', this.form.get('contactNo').value);
    localStorage.setItem('emailAddress', this.form.get('emailAddress').value);

    this.router.navigate(['one']);
  }
}
