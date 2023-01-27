import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getHeros(i: number){
    return( this.http.get<any>('https://www.superheroapi.com/api.php/10225078872990574/'+i))
  }
}
