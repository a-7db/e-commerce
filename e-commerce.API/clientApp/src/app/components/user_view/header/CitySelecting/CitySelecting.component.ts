import { Component, Input, OnInit } from '@angular/core';
import { display, toRight } from 'src/app/animations';
import { IClientData } from 'src/app/interfaces/IClientData';
import { ILocation } from 'src/app/interfaces/ILocation';

@Component({
  selector: 'app-CitySelecting',
  templateUrl: './CitySelecting.component.html',
  styleUrls: ['./CitySelecting.component.css'],
  animations: [toRight, display]
})
export class CitySelectingComponent implements OnInit {

  @Input() animateState!: string;
  showBranches: boolean = false;

  cities: string[] = [
    'الأحساء', 'الجبيل', 'الخبر', 'الدمام', 'الرياض', 'الظهران', 'المدينة', 'بريدة', 'تبوك', 'جدة', 'عنيزة',
  ];
  branches: string[] = [
    'المبرز', 'الهفوف', 'الخبر', 'الدمام', 'الرياض', 'الظهران', 'المدينة', 'بريدة', 'تبوك', 'جدة', 'عنيزة',
  ];

  userLocation!: ILocation;
  city!: string;
  constructor() { }
  
  ngOnInit() {
    
  }
  
  toggleSideBar(){
    this.animateState = this.animateState === 'hidden'? 'visible' : 'hidden';
  }

  cityClicked(city: string) {
    this.city = city;
    this.showBranches = true;
  }
}
