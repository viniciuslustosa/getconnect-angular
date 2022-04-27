import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film';
import { environment } from '../../environments/environment';

@Injectable()
export class OmdbService {

  private baseUrl = environment.BASE_URL;
  private apiKey = environment.API_KEY;

  constructor(
    private http: HttpClient,
  ) { }

  find(text: string): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        't': text,
        'apikey': this.apiKey,
      },
      responseType: 'json'
    });
  }
}
