import { Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'draftkings-marketplace';
  @HostBinding('class') className = '';

  constructor(private overlay: OverlayContainer) {}

  catchDarkModeEvent(isDarkMode: any) {
    const darkClassName = 'darkMode';
    this.className = isDarkMode ? darkClassName : '';
    if (isDarkMode) {
      this.overlay.getContainerElement().classList.add(darkClassName);
    } else {
      this.overlay.getContainerElement().classList.remove(darkClassName);
    }
  }
}
