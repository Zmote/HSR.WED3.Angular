import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components';
import {DashboardGuard} from './auth/services/dashboard-guard.service';


const appRoutes: Routes = [
  // Depending if we allow access to routes via direct URL, this below makes sense
  // question is, is that to be supported for the Testat? If yes, do we need to provide Guards for all paths?
  // ie. Transaction Guard for transactions path etc.?
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
