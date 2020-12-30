import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'floating',
    loadChildren: () => import('./floating/floating.module').then(m => m.FloatingModule)
  },
  {
    path: 'productList',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule)
  },
  {
    path: 'counter1',
    loadChildren: () => import('./counter1/counter1.module').then(m => m.Counter1Module)
  },
  {
    path: 'counter2',
    loadChildren: () => import('./counter2/counter2.module').then(m => m.Counter2Module)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
  {
    path: 'dynamicDiv',
    loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
