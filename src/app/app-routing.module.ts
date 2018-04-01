import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  // TODO: Add routing of lazy loaded dashboard Module (with guards) here...

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
