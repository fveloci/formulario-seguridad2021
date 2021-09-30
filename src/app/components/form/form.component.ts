import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../services/form/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;


  constructor(private formService: FormService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]),
        dni: new FormControl('', [
          Validators.required,
          Validators.maxLength(20)
        ]),
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        phone: new FormControl('', [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('^[0-9]*$')
        ]),
        street: new FormControl('', [
          Validators.required
        ]),
        number: new FormControl('', [
          Validators.required,
          Validators.maxLength(5)
        ])
    });
  }

  sendForm(){
    console.log('Form: ', this.form.value);
  }

}
