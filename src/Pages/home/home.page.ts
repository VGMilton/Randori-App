import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidht: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = "sidenav"
  isSidenavCollapsed=false;
  screenWidht = 0;

  constructor() {}

  onToggleSideNav(data:SideNavToggle):void{
    this.screenWidht = data.screenWidht;
    this.isSidenavCollapsed = data.collapsed;
  }


}
