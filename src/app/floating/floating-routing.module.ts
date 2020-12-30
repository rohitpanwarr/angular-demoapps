import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloatingTextComponent } from './floating-text/floating-text.component';

const routes: Routes = [
  {
    path: '',
    component: FloatingTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingRoutingModule { }
