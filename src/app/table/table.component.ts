import { Component, AfterViewInit, Input } from '@angular/core';
import { Assunto } from '../form/assunto.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  @Input() assuntos:Assunto[] = [];

  
  constructor() { }

  ngAfterViewInit(): void {
  }

}
