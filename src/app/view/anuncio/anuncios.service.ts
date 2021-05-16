import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anuncio } from './anuncio';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  private readonly API = 'http://localhost:3000/anuncio';


  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Anuncio[]>(this.API).pipe(
      tap(console.log)
    );
  }

  create(anuncio:any){
    return this.http.post(this.API, anuncio).pipe(take(1))
  }


}
