import { Component, OnInit } from '@angular/core';
import {ListaService} from './lista.service';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  list: any[];
  listp: any;
  contador = 0;
  constructor(private lista: ListaService) { }

  ngOnInit() {
    this.lista.disciplinas().subscribe(
        list => {
            this.list = list;
            console.log(list);
        }
    );
      this.lista.getdisciplina(1).subscribe(
          listp => {
              this.listp = listp;
              console.log(listp);
          }
      );
  }
}
