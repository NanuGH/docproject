import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  title = 'docproject';
  displayedColumns: string[] = ['id', 'nome', 'origem', 'idade'];
  dataSource = Data_Dog;
  
  ngOnInit(): void {
  }

}
