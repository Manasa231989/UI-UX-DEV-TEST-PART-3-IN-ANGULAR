import { Component, OnInit } from '@angular/core';
import { TableFunctionService } from './table-function.service';

@Component({
  selector: 'app-table-function',
  templateUrl: './table-function.component.html',
  styleUrls: ['./table-function.component.scss']
})
export class TableFunctionComponent implements OnInit {
  data: any;
  isDesc: boolean = false;
  column: string = 'name';

  constructor(private apiService: TableFunctionService) { }

  ngOnInit() {
    this.apiService.getData().subscribe((response:any) => {
      this.data = response.cookies;
    })
  }

  sort(property) {
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    let direction = this.isDesc ? 1 : -1;

    this.data.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }


}
