import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private apiUrl = 'https://localhost:44333/api/reports';

  constructor(private http: HttpClient) {}

  getAllForAuthor(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`,
    });

    return this.http.get<any[]>(`${this.apiUrl}/for-author`, { headers });
  }
}
