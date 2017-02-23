import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { HololensPage } from '../hololens/hololens';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ListPage;
  tab2Root: any = HololensPage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
