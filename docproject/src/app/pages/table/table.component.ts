import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { postType } from 'src/app/models/post-type';
import { PostService } from 'src/app/service/post-service';
import { MatDialog } from '@angular/material/dialog';

import { DialogBoxComponent } from 'src/app/models/dialog-box/dialog-box.component';
import { FormComponent } from '../form/form.component';

/*export interface Dog {
  id: string;
  nome: string;
  origem: string;
  idade: number;
}

const Data_Dog: Dog[] = [
  {id: '1', nome: 'Rex', origem: 'Praia', idade: 5},
  {id: '2', nome: 'Lupi', origem: 'SV', idade: 2},
];
*/

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  

  constructor(
    private postService: PostService,
    public dialog: MatDialog
  ) { }

  openDialog(action:any, obj:any) {
    obj.action = action;
    const dialogRef = this.dialog.open(FormComponent,{
      width: '400px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
       this.addRowData(result.data);
      } else if (result.event == 'ele') {
       // this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
       // this.deleteRowData(result.data);
      }
    });
  }

  title = 'docproject';
  displayedColumns: string[] = ['nome', 'origem', 'idade','action'];
  dataSource: postType[] = []; //= Data_Dog;

  //variavel p guardar info do pedido http feito
  post: any;

  ngOnInit(): void {
    this.postService.getPost().subscribe(
      (data: postType[]) => {
        //this.dataSource = data.filter(d => d.title = "	qui est esse")
        this.dataSource = data
      }
    )
  }

  addRowData(row_obj:any) {
    var d = new Date();
    this.dataSource.push({
      id: d.getTime(),
      nome: row_obj.nome,
      origem: row_obj.origem,
      idade: row_obj.idade
    });
   // this.table.renderRows();

  }
  updateRowData(row_obj:any) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.id = row_obj.userId;
        value.nome = row_obj.title;
        value.origem = row_obj.body;
      }
      return true;
    });
  }

  deleteRowData(row_obj:any) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }


}
  