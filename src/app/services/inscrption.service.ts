import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscrptionService {
  private apiUrl = 'http://localhost:8080/clients';

  constructor(private httpClient: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/clients/post`, data);
  }
}
