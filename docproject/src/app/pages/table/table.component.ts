import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/models/post';
import { DogService } from 'src/app/service/dog-service';

export interface Dog {
  id: string;
  nome: string;
  origem: string;
  idade: number;
}


const Data_Dog: Dog[] = [
  {id: '1', nome: 'Rex', origem: 'Praia', idade: 5},
  {id: '2', nome: 'Lupi', origem: 'SV', idade: 2},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    private dogService:DogService
  ) { }

  title = 'docproject';
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource:post[] = []; //= Data_Dog;

  //variavel p guardar info do pedido http feito
  post: any;
  
  ngOnInit(): void {
    this.dogService.getPost().subscribe(
      (data:post[])=>{
        this.dataSource = data.filter(d=>d.title ="	qui est esse")
       
      }
    )
  }

  submit(){
    
  }

}
