import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private apiUrl = 'https://localhost:44333/api/tours'; // Base URL for your API

  constructor(private http: HttpClient) {}

  // Get all tours
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Create a new tour
  createTour(dto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, dto);
  }

  // Get tours for the logged-in user
  getForUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/for-user`);
  }

  // Publish a tour
  publish(tourId: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/set-publish/${tourId}`, {});
  }

  // Get all published tours
  getPublish(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-publish`);
  }

  // Get tours by author
  getAuthor(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-author`);
  }

  // Archive a tour
  archive(tourId: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/set-archive/${tourId}`, {});
  }
}
