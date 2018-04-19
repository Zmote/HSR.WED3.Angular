import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HomeComponent, TransactionComponent} from './components';
import {DashboardGuard} from '../auth/services/dashboard-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent, // TODO: Add initial router outlet dashboard component...
    canActivate: [DashboardGuard],
    children: [
      {path: '', component: HomeComponent},
      {path: 'transactions', component: TransactionComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes) // !forChild() important
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
