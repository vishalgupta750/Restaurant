


import {

  Component,

  OnInit

} from

  '@angular/core';



import { NgForm }

  from '@angular/forms';



import { DataService }

  from '../data.service';



import { Router, ActivatedRoute }

  from '@angular/router';

import {
  FormBuilder,
  FormGroup, Validators,
  FormControl
} from
  '@angular/forms';














@Component({



  selector: 'app-admin',



  templateUrl:

    './admin.component.html',



  styleUrls: ['./admin.component.css']



})



export class

  AdminComponent
  implements OnInit {

  profileForm:
    FormGroup;

  loading = false;

  submitted = false;

  returnUrl: string;





  constructor(
    private formBuilder:
      FormBuilder,

    private route:
      ActivatedRoute,

    private router:
      Router) { }





  ngOnInit() {

    this.profileForm =
      this.formBuilder.group({

        email: new
          FormControl('', [Validators.required]),

        password: new
          FormControl('',
            Validators.required)

      });



    // reset login status

    



    // get return url from route parameters or default to '/'

    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] ||
      '/';

  }



  // convenience getter for easy access to form fields

  get f() { return this.profileForm.controls; }










  onSubmit() {

    this.submitted =
      true;



    // stop here if form is invalid

    if (this.profileForm.invalid) {

      return;

    }



    

  }
}
