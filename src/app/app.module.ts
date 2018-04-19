import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CoreModule} from './core/core.module';
import {WelcomeModule} from './welcome/welcome.module';

import {AppComponent} from './app.component';

import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {NavComponent} from './nav/nav.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {DashboardModule} from './dashboard/dashboard.module';
import {DashboardGuard} from './auth/services/dashboard-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule.forRoot(),
    AuthModule.forRoot(),
    WelcomeModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
