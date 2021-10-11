import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { Assunto } from './assunto.model';
import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit {

  @ViewChild(MatTable) tabela!: MatTable<Assunto>;

  prioridades: string[] = ["Máxima", "Média", "Mínima"]
  assuntos: Assunto[] = [{titulo:'Angular', prioridade:'Maxima'}]
  displayedColumns: string[] = ['titulo', 'prioridade'];

  constructor() { }

  ngAfterViewInit(): void {
  }

  adicionar(assunto:string, prioridade:string):void{
      this.assuntos.push(new Assunto(assunto, prioridade))
      this.tabela.renderRows()
      console.log(this.assuntos)
  }

}
