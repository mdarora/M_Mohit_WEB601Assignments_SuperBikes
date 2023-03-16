import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SuperBikeService {

  constructor(private http: HttpClient , private MessageService: MessageService) { }

  getBikes(): Observable<Content[]>{
    const bikes = contents;
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/bikes");
  }

  getBikeById(id: number): Observable<any>{
    const bike = contents.find(content => content.id === id);

    if(bike){
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(bike);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}
