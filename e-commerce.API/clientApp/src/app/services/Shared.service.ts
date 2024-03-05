import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private reset = new BehaviorSubject(false);
  private clear = new BehaviorSubject(false);

  getSearchSettings(): Observable<boolean>{
    return this.reset
  }

  sendSearchSettings(status: boolean){
    this.reset?.next(status)
  }

  clearSearchInput(): Observable<boolean>{
    return this.clear
  }

  clearCommand(isClicked: boolean) {
    this.clear?.next(isClicked);
  }

  constructor() { }
}
