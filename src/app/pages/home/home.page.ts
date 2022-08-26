import { Component,OnInit } from '@angular/core';
import {GetDataService} from '../../services/spaceX/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public satellites: any;
  searchTerm: string ;
  constructor(private service: GetDataService) {}
  ngOnInit(){
    this.fetchSatellites();
  }

  private fetchSatellites(){
    this.service.getData().subscribe(
      response =>{
        if (!response){
          alert('error');
        }else {
          this.satellites = response;
        }
      }
    );
  }

}
