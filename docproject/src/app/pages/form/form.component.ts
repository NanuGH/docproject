import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dogType } from 'src/app/models/dog-type';
import { postType } from 'src/app/models/post-type';
import { PostService } from 'src/app/service/post-service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { DogService } from '../../service/dog-service';
import { DialogBoxComponent } from 'src/app/models/dialog-box/dialog-box.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  action!: string;
  local_data: any;

  constructor(private postService: PostService,
    public dialogRef: MatDialogRef<DialogBoxComponent>,

    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: postType) {
    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }



  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      origem: new FormControl('', Validators.required),
      idade: new FormControl('', Validators.required)
    });


  }

  submit() {
    const postAddType = <postType>{
      nome: this.form.value.nome,
      origem: this.form.value.origem,
      idade: this.form.value.idade,
    }

    this.postService.createPost(postAddType).subscribe(
      (data: postType) => {
        console.log(data);
      }
    )
  }

  /*delPost(idPost: String) {
    this.postService.delPost(idPost).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }*/

  updtPost(idPost: String, postUpdtType: postType) {
    this.postService.updtPost(idPost, postUpdtType).subscribe(
      (data: postType) => {
        console.log(data);
      }
    )
  }


  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }


}


