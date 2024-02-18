import { Injectable } from '@angular/core';
import { LoocalSotrageSettingsService } from './LoocalSotrageSettings.service';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  constructor(private _localstorage: LoocalSotrageSettingsService) { }

  setUserBranchData(){
    
  }
}
