import { Component, OnInit,Input,Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() searcher: string[];

  constructor() { }

  ngOnInit() {}

}
