import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:5185';
  constructor(private _http: HttpClient) { }

  enroll(registration: Registration): Observable<any> {
  return this._http.post<any>(`${this._url}/api/Registration/register`, registration);
}

}
