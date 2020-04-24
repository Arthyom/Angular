import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-ng-class-async',
  templateUrl: './cmp-ng-class-async.component.html',
  styleUrls: ['./cmp-ng-class-async.component.css']
})
export class CmpNgClassAsyncComponent implements OnInit {

  cargando = true;
  
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.cargando = false
    }, 4000);
  }

}
