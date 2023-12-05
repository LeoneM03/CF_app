import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { navbarData } from './nav-data';

interface SliderbarToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sliderbar',
  templateUrl: './sliderbar.component.html',
  styleUrls: ['./sliderbar.component.css']
})
export class SliderbarComponent implements OnInit {
  @Output() onToggleSidebar: EventEmitter<SliderbarToggle> = new EventEmitter();
  collapsed = true;
  ScreenWidth = 0;
  navData = navbarData;

  ngOnInit(): void {
    this.ScreenWidth = window.innerWidth;
  }

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // vijella si esta en el login
        if (event.url === '/login') {
          this.collapsed = true; // con esto se esconde en el login
        } else {
          this.collapsed = false; // ya para las demas se muestra
        }
      }
    });
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidebar.emit({ collapsed: this.collapsed, screenWidth: this.ScreenWidth });
  }

  closeSBN(): void {
    this.collapsed = false;
    this.onToggleSidebar.emit({ collapsed: this.collapsed, screenWidth: this.ScreenWidth });
  }
}
