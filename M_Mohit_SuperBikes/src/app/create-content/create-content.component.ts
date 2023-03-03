import { Component, EventEmitter, Output} from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  newBike: any = {};
  errMsg: string = '';
  @Output() addBikeEvent = new EventEmitter<Content>();

  

  addNewBike(){

    const addBike = new Promise((resolve, reject) =>{
      if(!this.newBike.title){
        reject('Title is required');
      } else if(!this.newBike.description){
        reject('Description is required');
      } else if(!this.newBike.creator){
        reject('Creator is required');
      } else{
        this.addBikeEvent.emit(this.newBike);
        this.newBike = {};
        resolve(this.newBike.title);
      }
    });

    addBike.then(title => {
      this.errMsg = '';
      console.log(`New Bike Added Successfull, Title: ${title}`);
    }).catch(err => {
      this.errMsg = err;
    });
  }
}
