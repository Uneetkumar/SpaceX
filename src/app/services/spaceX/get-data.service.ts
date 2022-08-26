import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private url = `https://api.spacexdata.com/v4/launches`;

  constructor(
    private httpClient: HttpClient
  ) { }
  getData(){
    return this.httpClient.get(this.url);
  }
}
