import { Component, EventEmitter, Output} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newBike: any = {};
  @Output() addBikeEvent = new EventEmitter<Content>();

  addNewBike(){
    this.addBikeEvent.emit(this.newBike);
    this.newBike = {};
  }
}
