import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})

export class MissionFilterComponent {
  @Output() applyFilters = new EventEmitter<{
    year: string;
    launchSuccess: string;
    landSuccess: string;
  }>();
  @Output() reset = new EventEmitter<void>();
  
  launchSuccess: string = '';
  landSuccess: string = '';
  launchYear: string = '';

  emitFilters() {
    this.applyFilters.emit({
      year: this.launchYear,
      launchSuccess: this.launchSuccess,
      landSuccess: this.landSuccess
    });
  }

  onReset() {
    this.launchYear = '';
    this.launchSuccess = '';
    this.landSuccess = '';
    this.reset.emit();
  }
}
