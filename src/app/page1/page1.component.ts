import { CanComponentDeactivate } from './../can-component-deactivate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit, CanComponentDeactivate {
  saved: boolean;

  constructor() { 
    this.saved = false;
  }

  ngOnInit() {
  }


  canDeactivate(): boolean {
    if (this.saved) {
      return true;
    } else {
      return confirm('Seguro que quieres salir sin guardar');
    }
  }
}
