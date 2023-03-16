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
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  constructor(private http: HttpClient , private MessageService: MessageService) { }
  

  getBikes(): Observable<Content[]>{
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/bikes");
  }

  addBike(newBike: Content): Observable<Content>{
    this.MessageService.add(`New Bike added`);
    return this.http.post<Content>("/api/bikes", newBike, this.httpOptions);
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
