import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-progress-one',
  templateUrl: './survey-progress-one.page.html',
  styleUrls: ['./survey-progress-one.page.scss'],
})
export class SurveyProgressOnePage implements OnInit {
  private form: FormGroup;
  isVisiting: boolean;
  duration: string;
  hasFriends: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      visit: ['', Validators.required],
      friends: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  goBack() {
    this.router.navigate([''])
  }

  next() {
    console.log(this.form);
    this.router.navigate(['two']);
  }

  setVisitField(isVisit: boolean) {
    this.isVisiting = isVisit;
    this.form.get('visit').setValue(this.isVisiting);
  }

  setFriendsField(hasFriends: boolean) {
    this.hasFriends = hasFriends;
    this.form.get('friends').setValue(this.hasFriends);
  }

  setDuration(duration: string) {
    this.duration = duration;
    this.form.get('duration').setValue(this.duration);
  }

}
