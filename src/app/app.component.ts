import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


interface SliderbarToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager-app';

  constructor(private router: Router) {}

  shouldHideSliderbar(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/login' || currentUrl === '/transition';
  }

  isSlideNavCollapsed = false;
  screenWidth = 0;

  onToggleSidebar(data: SliderbarToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSlideNavCollapsed = data.collapsed;
  }
  

}

