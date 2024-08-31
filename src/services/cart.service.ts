import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://localhost:44333/api/carts';

  constructor(private http: HttpClient) {}

  // Create a new cart
  createCart(cartDto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, cartDto);
  }

  // Delete a cart by ID
  deleteCart(cartId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${cartId}`);
  }

  // Buy cart for a specific customer
  buyCart(customerId: number): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${customerId}`, {});
  }
}
