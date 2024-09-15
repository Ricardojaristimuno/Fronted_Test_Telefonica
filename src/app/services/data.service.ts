
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL_API= environment.Api
  
  constructor(private http: HttpClient) { }

  GetCupos(){
    return this.http.get(this.URL_API+'/Cupos');
  }

  GetUsers(){
    return this.http.get(this.URL_API+'/usuarios');
  }
}
