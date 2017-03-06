import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { HololensPage } from '../pages/hololens/hololens';
import { AboutPage } from '../pages/about/about';

import { TabsPage } from '../pages/tabs/tabs';

import { FIREBASE_KEY } from './keys';

// Must export the config
export const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: 'aolardemo.firebaseapp.com',
  databaseURL: 'https://aolardemo.firebaseio.com',
  storageBucket: 'aolardemo.appspot.com',
  messagingSenderId: '983011821084'
};


@NgModule({
  declarations: [
    MyApp,
    ListPage,
    HololensPage,
    AboutPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    HololensPage,
    AboutPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
