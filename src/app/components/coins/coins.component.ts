import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss'],
})
export class CoinsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  currentVal1 = '' ;
  getVal1(val){
    this.currentVal1= val;
  }
  currentVal2 = "";
  getVal2(val){
    this.currentVal2= val;
  }
  currentVal3 = "";
  getVal3(val){
    this.currentVal3= val;
  }
  currentVal4 = "";
  getVal4(val){
    this.currentVal4= val;
  }

  total1 = ''
  totalVal1(val){
    this.total1 = val;
  }
total2 = ''
  totalVal2(val){
    this.total2 = val;
  }
  total3 = ''
  totalVal3(val){
    this.total3 = val;
  }
total4 = ''
  totalVal4(val){
    this.total4 = val;
  }

}
