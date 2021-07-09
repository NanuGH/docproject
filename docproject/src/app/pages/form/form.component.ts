import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { DogService } from '../../service/dog-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
   
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      origem: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required)
    });
    

  }

  submit(){
    console.log(this.form.value);
  }

}
