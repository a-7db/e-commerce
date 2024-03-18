import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Size } from '../models/size';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  private isValid = new BehaviorSubject<Boolean>(false);
  private _sizes: Size[] = [];

  getIsValid(){
    return this.isValid.asObservable();
  }

  setIsValid(isValidValue: boolean){
    this.isValid.next(isValidValue);
  }

  setSizes(sizes: Size){
    this._sizes.push(sizes);
  }

  getSizes() : Size[]{
    return this._sizes;
  }
}
