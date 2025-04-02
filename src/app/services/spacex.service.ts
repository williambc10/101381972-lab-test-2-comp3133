import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from '../models/launch';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService {
  private BASE_URL = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getAllLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.BASE_URL);
  }

  getLaunchesByYear(year: string): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.BASE_URL}?launch_year=${year}`);
  }

  getFilteredLaunches(params: any): Observable<Launch[]> {
    const query = new URLSearchParams(params).toString();
    return this.http.get<Launch[]>(`${this.BASE_URL}?${query}`);
  }

  getLaunchById(id: number): Observable<Launch> {
    return this.http.get<Launch>(`${this.BASE_URL}/${id}`);
  }
}