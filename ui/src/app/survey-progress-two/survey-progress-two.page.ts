import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-progress-two',
  templateUrl: './survey-progress-two.page.html',
  styleUrls: ['./survey-progress-two.page.scss'],
})
export class SurveyProgressTwoPage implements OnInit {
  private form: FormGroup;
  purpose: string;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      purpose: [''],
    });
  }

  goBack() {
    this.router.navigate(['one'])
  }

  next() {
    console.log(this.form);
    this.router.navigate(['three']);
  }

  setPurpose(purpose: string) {
    this.purpose = purpose;
    this.form.get('purpose').setValue(this.purpose);
  }
}
