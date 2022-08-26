import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {promise} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private url = `https://api.spacexdata.com/v4/launches`;

  constructor(
    private httpClient: HttpClient
  ) { }
  public readAll(): Promise<any> {
    return this.httpClient.get(this.url).toPromise();
  }
}
