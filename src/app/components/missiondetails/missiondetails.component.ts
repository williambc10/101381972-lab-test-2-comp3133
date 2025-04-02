import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Launch } from '../../models/launch';
import { SpaceXApiService } from '../../services/spacex.service';

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissionDetailsComponent implements OnInit {
  mission?: Launch;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private spaceXApi: SpaceXApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.spaceXApi.getLaunchById(id).subscribe(data => {
      this.mission = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
