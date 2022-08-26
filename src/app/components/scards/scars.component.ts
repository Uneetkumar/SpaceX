import {Component, Input, OnInit} from '@angular/core';
import {Satellite} from "../../modal/satellite";

@Component({
  selector: 'app-scars',
  templateUrl: './scars.component.html',
  styleUrls: ['./scars.component.scss'],
})
export class ScarsComponent implements OnInit {
  @Input() satellite: Satellite = new Satellite();

  constructor() { }

  ngOnInit() {
  }

}
