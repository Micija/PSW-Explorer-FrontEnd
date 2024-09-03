import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProblemService {
  private apiUrl = 'https://localhost:44333/api/problems';

  constructor(private http: HttpClient) {}

  // Create a new tour
  createProblem(Problem: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, Problem);
  }
}
