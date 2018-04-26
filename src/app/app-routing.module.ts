import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/pagenotfound/pagenotfound.component';
import {DashboardGuard} from './auth/services/dashboard-guard.service';


const appRoutes: Routes = [
  // TODO: Add routing of lazy loaded dashboard Module (with guards) here...
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canLoad: [DashboardGuard] },

  // TODO: Add routing of eagerly loaded modules here...
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
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
