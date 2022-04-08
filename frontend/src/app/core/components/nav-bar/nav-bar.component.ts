import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isSearch: boolean = false;
  isDarkMode: boolean = false;

  @Output() setIsDarkMode = new EventEmitter<boolean>();
  @ViewChildren("searchBar") searchBar!: QueryList<ElementRef>;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  toggleDarkMode(isDarkMode: boolean) {
    this.isDarkMode = isDarkMode;
    this.setIsDarkMode.emit(isDarkMode);
  }

  toggleSearch() {
    this.isSearch = !this.isSearch;
    setTimeout(()=>{ 
      this.searchBar.find((item, index) => {
        return index === 0
      })?.nativeElement.focus();
    },0);  
    this.cd.detectChanges();
  }
}
