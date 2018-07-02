import { CanComponentDeactivate } from './can-component-deactivate';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ConfirmServiceService implements CanDeactivate<CanComponentDeactivate> {

  constructor() { }

  canDeactivate(component: CanComponentDeactivate,
     currentRoute: ActivatedRouteSnapshot,
     currentState: RouterStateSnapshot,
     nextState?: RouterStateSnapshot) {
     return component.canDeactivate ? component.canDeactivate() : true;
  }
}
