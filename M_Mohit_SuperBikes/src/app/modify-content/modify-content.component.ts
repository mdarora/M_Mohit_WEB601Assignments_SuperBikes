import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newBike: any = {};
  @Output() addBikeEvent = new EventEmitter<Content>();

  addNewBike(){
    this.addBikeEvent.emit(this.newBike);
    this.newBike = {};
  }
}
