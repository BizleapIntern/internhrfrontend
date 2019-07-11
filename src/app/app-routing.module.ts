import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path: 'location', component: LocationComponent},
  {path: 'employee', component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
