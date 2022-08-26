import { Component,OnInit } from '@angular/core';
import {GetDataService} from '../../services/spaceX/get-data.service';
import {Satellite} from "../../modal/satellite";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public satellites: Satellite[] = [];
  public searchTerm: string ;
  constructor(private service: GetDataService) {}
  ngOnInit(){
   this.fetchSatellites();
  }

  private async fetchSatellites() {
    this.satellites = await this.service.readAll();
  }

}
