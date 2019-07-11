import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { Location } from '../models/location';
import { Department } from '../models/department';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locationList: Location[];

  selectedLocation: Location;
  selectedDepartment: Department;

  constructor(private locationService: LocationService) { 
    this.locationService.getLocation().subscribe( locationList => {
      this.locationList = locationList;
    });
  }

  ngOnInit() {
  }

  showDetail(location: Location) {
    this.selectedLocation = location;
  }

  showDepartment(department: Department) {
    this.selectedDepartment = department;
    console.log(department);
    console.log(department.jobList);
    console.log(this.selectedDepartment.jobList);
  }

}
