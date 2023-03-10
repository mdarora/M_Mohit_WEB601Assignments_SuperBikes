import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SuperBikeService {

  constructor(private MessageService: MessageService) { }

  getBikes(): Observable<Content[]>{
    const bikes = contents;
    this.MessageService.add("Content array loaded!");
    return of(bikes);
  }

  getBikeById(id: number): Observable<any>{
    const bike = contents.find(content => content.id === id);
    this.MessageService.add(`Content Item at id: ${id}`);
    return of(bike);
  }
}
