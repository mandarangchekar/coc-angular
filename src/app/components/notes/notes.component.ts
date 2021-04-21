import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})



export class NotesComponent implements OnInit {

  constructor() { 

    

  }

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
  currentVal5 = "";
  getVal5(val){
    this.currentVal5= val;
  }
  currentVal6 = "";
  getVal6(val){
    this.currentVal6= val;
  }
  currentVal7 = "";
  getVal7(val){
    this.currentVal7= val;
  }
  currentVal8 = '';
  getVal8(val){
    this.currentVal8= val;
  }

  // total = <any>this.currentVal1*2000 +<any>this.currentVal2*1000 +<any>this.currentVal3*500 +<any>this.currentVal4*200 +
  // <any>this.currentVal5*100 +<any>this.currentVal6*50 + <any>this.currentVal7*20 + <any>this.currentVal8*10  ;
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
  total5 = ''
  totalVal5(val){
    this.total5 = val;
  }
total6 = ''
  totalVal6(val){
    this.total6 = val;
  }

total7 = ''
  totalVal7(val){
    this.total7 = val;
  }
total8 = ''
  totalVal8(val){
    this.total8 = val;
  }
// final = +this.total1 + +this.total2 + +this.total3 + +this.total4 + +this.total5 + +this.total6 + +this.total7 + +this.total8
 
}
  


