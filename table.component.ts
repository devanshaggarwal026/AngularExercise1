import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  people: any[];



  constructor() {
    this.people = [
      {id : 1001 , name : 'a' , salary : 10000 , department : 'cse' },
      {id : 1002, name : 'b', salary : 10000 , department : 'cse' },
      {id : 1003, name : 'c', salary : 10000 , department : 'cse' },
      {id : 1004, name : 'f', salary : 10000 , department : 'cse' },
      {id : 1005, name : 'r', salary : 10000 , department : 'cse' },
      {id : 1006, name : 't', salary : 10000 , department : 'cse' },
      {id : 1007, name : 'w', salary : 10000 , department : 'cse' },
      {id : 1008, name : 'u', salary : 10000 , department : 'cse' },
      {id : 1009, name : 'o', salary : 10000, department : 'cse' },
      {id : 1010, name : 'p', salary : 10000 , department : 'cse' }
      ];
       }

  ngOnInit() {


  }
}
