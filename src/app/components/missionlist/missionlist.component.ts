import { Component, OnInit } from '@angular/core';
import { SpaceXApiService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MissionFilterComponent } from '../missionfilter/missionfilter.component';


@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, MissionFilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionListComponent implements OnInit {
  launches: Launch[] = [];
  filterYear = '';

  constructor(private spaceXApi: SpaceXApiService) {}

  ngOnInit(): void {
    this.loadAllLaunches();
  }

  loadAllLaunches(): void {
    this.spaceXApi.getAllLaunches().subscribe(data => this.launches = data);
  }
  
  filterByYear(year: string): void {
    this.spaceXApi.getLaunchesByYear(year).subscribe(data => this.launches = data);
  }

  resetFilters(): void {
    this.filterYear = '';
    this.loadAllLaunches();
  }

  applyFilters(filters: {
    year: string;
    launchSuccess: string;
    landSuccess: string;
  }): void {
    const params: any = {};
    if (filters.year) params.launch_year = filters.year;
    if (filters.launchSuccess) params.launch_success = filters.launchSuccess;
    if (filters.landSuccess) params.land_success = filters.landSuccess;
  
    this.spaceXApi.getFilteredLaunches(params).subscribe(data => {
      this.launches = data;
    });
  }
}
