import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
        firebase.initializeApp({
        apiKey: "AIzaSyAMCGCKHm0U9VDP-Tgauwy3zQwFpIOyZZw",
        authDomain: "eventmanager-11ee3.firebaseapp.com",
        databaseURL: "https://eventmanager-11ee3.firebaseio.com",
        projectId: "eventmanager-11ee3",
        storageBucket: "eventmanager-11ee3.appspot.com",
        messagingSenderId: "96826947674"
      });

    firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
          this.rootPage = 'login';
        }else{
          this.rootPage = HomePage;
        }
       });

    });
  }


}

