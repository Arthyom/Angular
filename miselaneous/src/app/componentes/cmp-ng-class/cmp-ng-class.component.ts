import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-ng-class',
  templateUrl: './cmp-ng-class.component.html',
  styleUrls: ['./cmp-ng-class.component.css']
})
export class CmpNgClassComponent implements OnInit {

  classType : string = 'dark';
  classHeader: string = 'success';

  options: Object = {
    danger: false,
    primary: true
  }
 
  constructor() { }

  ngOnInit() {
  }

}
