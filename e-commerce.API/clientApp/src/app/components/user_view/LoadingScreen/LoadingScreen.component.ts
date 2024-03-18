import { Component, OnInit, Renderer2, inject } from '@angular/core';
import { LoadingSetupService } from 'src/app/services/LoadingSetup.service';

@Component({
  selector: 'app-LoadingScreen',
  templateUrl: './LoadingScreen.component.html',
  styleUrls: ['./LoadingScreen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  play: boolean = false;
  constructor(private renderer: Renderer2) { }

  private _loading = inject(LoadingSetupService);
  
  ngOnInit() {
    this.Loading()
  }

  Loading(){
    // Add Service to show The Loader
    this._loading.isPlaying().subscribe(value => this.play = value);
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
