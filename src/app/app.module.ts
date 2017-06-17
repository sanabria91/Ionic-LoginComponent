import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { HttpModule } from '@angular/http';
import { FirebaseProvider } from './../providers/firebase/firebase';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventCreatePage } from '../pages/event-create/event-create';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage} from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup'; 

import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { EventProvider } from '../providers/event/event';

import { Camera } from '@ionic-native/camera';

//database connection
export const firebaseConfig = {
    apiKey: "AIzaSyAMCGCKHm0U9VDP-Tgauwy3zQwFpIOyZZw",
    authDomain: "eventmanager-11ee3.firebaseapp.com",
    databaseURL: "https://eventmanager-11ee3.firebaseio.com",
    projectId: "eventmanager-11ee3",
    storageBucket: "eventmanager-11ee3.appspot.com",
    messagingSenderId: "96826947674"
};

class CameraMock extends Camera {
  getPicture(options){
    return new Promise( (resolve, reject)=>{
      resolve(`TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=`);
    });
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // EventCreatePage,
    // EventDetailPage,
    // EventListPage,
    // LoginPage,
    // ProfilePage,
    // ResetPasswordPage,
    // SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // EventCreatePage,
    // EventDetailPage,
    // EventListPage,
    // LoginPage,
    // ProfilePage,
    // ResetPasswordPage,
    // SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    AuthProvider,
    ProfileProvider,
    EventProvider,
    {provide:Camera, useClass: CameraMock}
  ]
})
export class AppModule {}
