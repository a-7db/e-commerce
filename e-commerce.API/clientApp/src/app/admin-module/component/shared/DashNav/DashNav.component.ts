import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-DashNav',
  templateUrl: './DashNav.component.html',
  styleUrls: ['./DashNav.component.css']
})
export class DashNavComponent implements OnInit {
  @Input() title: string = '';
  @Input() link: string = '';
  @Input() icon: string = '';

  constructor() { }

  ngOnInit() {
  }
}
