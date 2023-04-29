import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  apiURL = 'https://jsonplaceholder.typicode.com/todos/';
  obsrvbl$: Observable<any> = of('Ivan', 'Piter', 'Olha');

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  getData1() {
    return this.obsrvbl$;
  }
}
