import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components';
import {DashboardGuard} from './auth/services/dashboard-guard.service';


const appRoutes: Routes = [
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canLoad: [DashboardGuard] },
  { path: '', pathMatch: 'full', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canLoad: [DashboardGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
