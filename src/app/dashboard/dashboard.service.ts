import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class DashboardService {

  emp_Data = [
    {id: 1, name: 'Subhransu', gender:'Male'},
    {id: 2, name: 'Jom', gender:'Male' },
    {id: 3, name: 'Dipti',  gender:'Female'},
    {id: 4, name: 'Imran',  gender:'Male'},
    {id: 5, name: 'Brelly',  gender:'Female'},
    {id: 6, name: 'Anderson', gender:'Female' },
    {id: 7, name: 'Ganesh', gender: 'Male'},
    {id: 8, name: 'Hari',  gender:'Male'},
    {id: 9, name: 'Amita', gender:'Female'},
    {id: 10, name: 'Subhashree',  gender:'Female'},
  ];

  product_Data = [
    {id:'p01', name:'samsungA7', category:'Mobile', price:'10000', company:'Samsung', gender:'Male', product:'ss', discount:'10', tax:20},
    {id:'p02', name:'Mi_TV', category:'TV', price:'12000', company:'Xiaomi',  gender:'Male', product:'ss', discount:'10', tax:20},
    {id:'p03', name:'Inspiron 15', category:'Laptop', price:'45000', company:'Dell',  gender:'Male', product:'ss', discount:'10', tax:20},
    {id:'p04', name:'Note 8 ', category:'Mobile', price:'10500', company:'Xiaomi',  gender:'Male', product:'ss', discount:'10', tax:20},
    {id:'p05', name:'HP LaserJet Pro', category:'Printer', price:'15000', company:'HP',  gender:'Male', product:'ss', discount:'10', tax:20},
    {id:'p06', name:'Zenphone', category:'Mobile', price:'13000', company:'Asus',  gender:'Male', product:'ss', discount:'10', tax:20},
    {id:'p07', name:'JBL T450BT ', category:'Headphone', price:'1000', company:'JBL',  gender:'Male', product:'ss', discount:'10', tax:20},
  ]

  getEmployeeData() {
    return this.emp_Data;
  }

  getProductData() {
    return this.product_Data;
  }

  deleteEmployee(index) {
    this.emp_Data.splice(index,1);
    // return this.emp_Data;

  }

  deleteProduct(index) {
    this.product_Data.splice(index, 1);
    // return this.product_Data;
  }

}
