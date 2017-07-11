import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { OverlayContainer } from '@angular/material';

// import routing for your pages
import { routing } from './app.routing';

// import Ionic
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import pages
import { HomePage } from '../pages/home/home';
import { ContactsPage } from '../pages/contacts/contacts';
import { SchedulePage } from '../pages/schedule/schedule';
import { SettingsPage } from '../pages/settings/settings';

// import Ionic components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactsPage,
    SchedulePage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
    routing,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.themeClass = 'dark-theme';
  }
}
