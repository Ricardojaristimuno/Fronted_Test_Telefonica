
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL_API= environment.Api
  
  constructor(private http: HttpClient) { }
//**EndPoint de Cupos por usuario */
  GetCupos(){
    return this.http.get(this.URL_API+'/Cupos');
  }
//**EndPoint de Usuario */
  GetUsers(){
    return this.http.get(this.URL_API+'/usuarios');
  }
}
