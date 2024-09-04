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

  // Get problems for author
  getProblemsForAuthor(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.get<any>(`${this.apiUrl}/for-author`, { headers });
  }

  // Get new problems for author
  getNewProblemsForAuthor(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.get<any>(`${this.apiUrl}/new-for-author`, { headers });
  }

  // Solve a problem
  solveProblem(problemId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.patch<any>(
      `${this.apiUrl}/solve/${problemId}`,
      {},
      { headers }
    );
  }

  // Revision a problem
  revisionProblem(problemId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.patch<any>(
      `${this.apiUrl}/revision/${problemId}`,
      {},
      { headers }
    );
  }

  // On hold a problem
  onHoldProblem(problemId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.patch<any>(
      `${this.apiUrl}/on-hold/${problemId}`,
      {},
      { headers }
    );
  }

  // Get revisions for admin
  getRevisionForAdmin(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.get<any[]>(`${this.apiUrl}/all-admin-revision`, {
      headers,
    });
  }

  // Reject a problem
  reject(problemId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.patch<any>(
      `${this.apiUrl}/reject/${problemId}`,
      {},
      { headers }
    );
  }

  // Get problems for tourist
  getProblemsForTourist(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.get<any[]>(`${this.apiUrl}/for-tourist`, { headers });
  }
}
