import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';

@Injectable({
  providedIn: 'root'
})
export class SuperBikeService {

  constructor() { }

  getBikes(): Observable<Content[]>{
    const bikes = contents;
    return of(bikes);
  }

  getBikeById(id: number): Observable<any>{
    const bike = contents.find(content => content.id === id);
    return of(bike);
  }
}
