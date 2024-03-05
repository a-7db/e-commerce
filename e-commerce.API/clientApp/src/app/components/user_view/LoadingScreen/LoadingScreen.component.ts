import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-LoadingScreen',
  templateUrl: './LoadingScreen.component.html',
  styleUrls: ['./LoadingScreen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  play: boolean = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.Loading()
  }

  Loading(){
    // Add Service to show The Loader
  }

  private showLoader(): void {
    // Add the overflow-hidden class to the body element
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  private hideLoader(): void {
    // Remove the overflow-hidden class from the body element
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

}
