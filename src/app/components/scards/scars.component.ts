import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scars',
  templateUrl: './scars.component.html',
  styleUrls: ['./scars.component.scss'],
})
export class ScarsComponent implements OnInit {
  @Input() name: any[];
  @Input() serial: number[];
  @Input() src: any[];
  @Input() details: any[];
  @Input() articles: any[];

  constructor() { }

  ngOnInit() {}

}
