import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ConfirmServiceService } from './confirm-service.service';

const routes: Routes = [
  {path:'', pathMatch:'full', component:Page1Component,  canDeactivate: [ConfirmServiceService]},
  {path:'page2', component:Page2Component },
  {path:'page3', component:Page3Component }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
