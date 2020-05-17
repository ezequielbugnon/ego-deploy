import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiEgoService {


  constructor(
     private _http: HttpClient

  ) {

  }


  query():Observable<any>{
      return this._http.get('//challenge.agenciaego.tech/models');
  }

  getOne(id):Observable<any>{
     return this._http.get('//challenge.agenciaego.tech/models/'+id);
  }


}
