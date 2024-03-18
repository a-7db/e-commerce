import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSetupService {

  private playLoading = new BehaviorSubject<boolean>(false);

  play(value_play: boolean){
    this.playLoading.next(value_play);
  }

  isPlaying(){
    return this.playLoading;
  }

}
