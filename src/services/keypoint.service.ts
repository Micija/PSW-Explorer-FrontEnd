import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeypointService {
  private apiUrl = 'https://localhost:44333/api/keyPoints'; // Base URL for your API

  constructor(private http: HttpClient) {}

  // Existing method to create a key point
  createKeyPoint(dto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, dto);
  }

  // New method to get all key points by tour ID
  getAllByTourId(tourId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllByTourId/${tourId}`);
  }
}
