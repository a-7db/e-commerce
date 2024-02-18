import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoocalSotrageSettingsService {

  constructor() { }

  private initLocalStorage(key: string){
    if(!localStorage.getItem(key)){
      localStorage.setItem(key, '');
    }
  }

  private isExist(key: string) : boolean{
    if(localStorage.getItem(key)){
      return true;
    } else{
      return false;
    }
  }

  toObject(str: string): object{
    return JSON.parse(str);
  }

  stringfy(obj: object): string{
    return JSON.stringify(obj);
  }

  store(key: string, data: string){
    this.initLocalStorage(key);

    localStorage.setItem(key, data);
  }

  get(key: string): object | null{
    let stringData: string | null;
    if(this.isExist(key)){
      stringData = localStorage.getItem(key);
      return this.toObject(stringData!);
    } else {
      return null
    }
  }
}
