import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl = "http://localhost:8080/bizleap-internhr-application/";

  constructor(private httpClient: HttpClient) { }

  getLocation() {
    let url = this.baseUrl + "locations/list";

    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient
               .get<Location[]>(url);
  }
}
