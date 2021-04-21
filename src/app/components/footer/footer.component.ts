import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

 
  totalAmount = ''
  finalTotal(val1, val2){
    this.totalAmount = val1+ val2
  }

}
