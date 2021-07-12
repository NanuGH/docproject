import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dogType } from 'src/app/models/dog-type';
import { postType } from 'src/app/models/post-type';
import { PostService } from 'src/app/service/post-service';


import { DogService } from '../../service/dog-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
 

  constructor( private postService:PostService) { }

  ngOnInit(): void {   
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      origem: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required)
    });
    

  }

  submit(){
    console.log(this.form.value);
    const postAddType = <postType>{
      body:this.form.value.nome,
      title: this.form.value.origem,
      userId: this.form.value.idade,
    }

    this.postService.createPost(postAddType).subscribe(
      (data:postType)=>{
        console.log(data);
      }
    )
  }

  delPost(idPost:String){
    this.postService.delPost(idPost).subscribe(
      (data)=>{
        console.log(data);       
      }
    )
  }

  updtPost(idPost:String,postUpdtType:postType){
    this.postService.updtPost(idPost,postUpdtType).subscribe(
      (data:postType)=>{
        console.log(data);        
      }
    )
  }

}