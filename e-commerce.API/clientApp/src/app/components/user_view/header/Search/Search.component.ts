import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { products } from 'src/app/models/repo';
import { SharedService } from 'src/app/services/Shared.service';

@Component({
  selector: 'app-Search',
  templateUrl: './Search.component.html',
  styleUrls: ['./Search.component.css']
})
export class SearchComponent implements OnInit {
  

  results: Product[] = products;
  userInput: string = '';
  suggestionsState: boolean = false;

  constructor(private sharedService: SharedService) { }


  ngOnInit() {
    this.clearSearchInput()
  }


  toggleSuggest(){
    if(this.userInput.length > 0){
      this.suggestionsState = true;
      this.sharedService.sendSearchSettings(true);
    }
    else{
      this.suggestionsState = false;
      this.sharedService.sendSearchSettings(false);
    }
      
  }

  clearSearchInput(){
    this.sharedService.clearSearchInput().subscribe((isClicked) => {
      if(isClicked){
        this.userInput = '';
        this.toggleSuggest()
    }
    })
  }

}
