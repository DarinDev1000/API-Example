import { Component, OnInit } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // Default Variables
  baseUrl = 'https://api.thingiverse.com/search/';
  searchName = 'cat';
  urlAccessToken = '?access_token=a34aca11d88f36b8bdd1793cfeafd2b0';
  responseItems = [];

  constructor() { }

  // This is run at startup
  ngOnInit() {
    this.runSearch();
  }

  // This is run on the search button
  async runSearch() {
    const url = `${this.baseUrl}${this.searchName}${this.urlAccessToken}`;
    const response = await Axios.get(url);
    console.log(response.data);
    this.responseItems = response.data.hits;
  }
}
