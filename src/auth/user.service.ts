import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://localhost:44333/api/users';

  constructor(private http: HttpClient) {}

  // Get user by ID
  getUserById(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.get<any>(`${this.apiUrl}/GetById/${userId}`, { headers });
  }

  // Get suspicious users
  getSuspiciousUsers(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.get<any[]>(`${this.apiUrl}/suspicious-users`, {
      headers,
    });
  }

  // Block a user
  blockUser(userId: number): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.patch<any[]>(
      `${this.apiUrl}/block/${userId}`,
      {},
      { headers }
    );
  }

  // Get blocked users
  getBlockedUsers(): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.get<any[]>(`${this.apiUrl}/blocked-users`, { headers });
  }

  // Unblock a user
  unblockUser(userId: number): Observable<any[]> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('access-token')}`, // Assuming token is stored in local storage
    });

    return this.http.patch<any[]>(
      `${this.apiUrl}/unblock/${userId}`,
      {},
      { headers }
    );
  }
}
