import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-progress-three',
  templateUrl: './survey-progress-three.page.html',
  styleUrls: ['./survey-progress-three.page.scss'],
})
export class SurveyProgressThreePage implements OnInit {
  private form: FormGroup;
  industry: string;
  industries: Array<any>;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      industry: [''],
    });
    this.industries = [
      {
        industry: 'Construction',
        icon: 'assets/icons/construction.svg'
      },
      {
        industry: 'Hospitality',
        icon: 'assets/icons/hospitality.svg'
      },
      {
        industry: 'Real Estate',
        icon: 'assets/icons/real-estate.svg'
      },
      {
        industry: 'Tourism',
        icon: 'assets/icons/globe.svg'
      },
      {
        industry: 'Manufacturing',
        icon: 'assets/icons/manufacturing.svg'
      },
      {
        industry: 'Technology',
        icon: 'assets/icons/tech.svg'
      },
      {
        industry: 'Farming',
        icon: 'assets/icons/farming.svg'
      },
      {
        industry: 'Fishing',
        icon: 'assets/icons/fishing.svg'
      }
    ]
  }

  goBack() {
    this.router.navigate(['three'])
  }

  next() {
    console.log(this.form);
    this.router.navigate(['four']);
  }

  setIndustry(industry: string) {
    this.industry = industry;
    this.form.get('industry').setValue(this.industry);
  }

}
