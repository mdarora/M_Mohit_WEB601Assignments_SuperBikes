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
        reject('Failed to add, Title is required');
      } else if(!this.newBike.description){
        reject('Failed to add, Description is required');
      } else if(!this.newBike.creator){
        reject('Failed to add, Creator is required');
      } else if(!this.newBike.id){
        reject('Failed to add, Try again');
      } else{
        this.addBikeEvent.emit(this.newBike);
        resolve(this.newBike.title);
      }
    });

    addBike.then(title => {
      this.errMsg = '';
      this.newBike = {};
      console.log(`New Bike Added Successfull, Title: ${title}`);
    }).catch(err => {
      this.errMsg = err;
    });
  }
}
