import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url = `http://localhost:8082/names`;

  constructor(
    private httpClient: HttpClient
  ) { }
  getData(){
    return this.httpClient.get(this.url);
  }
}
