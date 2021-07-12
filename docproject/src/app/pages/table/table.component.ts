import { Component, OnInit } from '@angular/core';
import { postType } from 'src/app/models/post-type';
import { PostService } from 'src/app/service/post-service';

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
    private postService:PostService
  ) { }

  title = 'docproject';
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource:postType[] = []; //= Data_Dog;

  //variavel p guardar info do pedido http feito
  post: any;
  
  ngOnInit(): void {
    this.postService.getPost().subscribe(
      (data:postType[])=>{
        this.dataSource = data.filter(d=>d.title ="	qui est esse")
      }
    )
  }

}
