import { Component, HostListener, OnInit } from '@angular/core';
import { zoomIn } from 'src/app/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [zoomIn]
})
export class HeaderComponent implements OnInit {
  sidebarState: string = 'hidden';
  loginStste: boolean = false;
  animate: boolean = false;
  constructor() { }
  
  ngOnInit(): void {}
  
  sidebarToggle(){
    this.sidebarState = this.sidebarState === 'hidden' ? 'visible': 'hidden';
  }
  
  loginToggle() {
    this.loginStste = !this.loginStste;
    this.animate = !this.animate
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent){
    const clickedElement = event.target as HTMLElement

    if (!clickedElement.closest('.close') && this.loginStste){
      this.loginToggle();
    }
  }

}
