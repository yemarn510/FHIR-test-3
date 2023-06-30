import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownItem } from './app.models';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  endPoint = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }
  
  getPrefixes(): Observable<{th: DropdownItem[], en: DropdownItem[]}> {
    return this.http.get<{th: DropdownItem[], en: DropdownItem[]}>(this.endPoint + '/prefix');
  }

  getGenders(): Observable<DropdownItem[]> {
    return this.http.get<DropdownItem[]>(this.endPoint + '/gender');
  }
}
