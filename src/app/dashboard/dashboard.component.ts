import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  type = 'employee';

  displayedColumns: string[] = []
  rowData = new MatTableDataSource<any>();
  tableHeaders = [];
  constructor(private dashboardService : DashboardService, private _snackBar: MatSnackBar) {
  }
  ngOnInit() {
    this.getRowData();

  }

  getRowData(){
    let data = []
    if(this.type === 'employee') {
      data = this.dashboardService.getEmployeeData()
    } else if(this.type === 'product') {
      data = this.dashboardService.getProductData();
    }
    this.createTableHeader(data[0]);
    this.rowData = new MatTableDataSource<any>(data);
    console.log('data', this.rowData);
  }

  createTableHeader(data) {
    this.displayedColumns = [];
    this.displayedColumns = Object.keys(data);
    this.displayedColumns.push('Action');

  }
  getSelectedType(type) {
    this.type = type.value;
    this.getRowData();
  }

  deleteRow(index) {
    let data = []
    if(this.type === 'employee') {
      this.dashboardService.deleteEmployee(index);
    } else if(this.type === 'product') {
      this.dashboardService.deleteProduct(index)
    }

    this.getRowData();
    this._snackBar.open( 'One row deleted from table !!', 'Deleted', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }


}
