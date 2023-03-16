import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { SuperBikeService } from '../services/super-bike.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultBike: string = '/assets/images/drawBike.jpg';


  constructor(private SuperBikeService: SuperBikeService){
    
  }

  ngOnInit(){
    this.SuperBikeService.getBikes().subscribe(bikes => this.contents = bikes );
  }

  addNewBike(newBike: Content){
    this.SuperBikeService.addBike(newBike).subscribe(newBikeFromServer => {
      this.contents.push(newBikeFromServer);
      this.contents = [...this.contents];
    });
  }

  
  searchByTitle(){
    const matchingBike = this.contents.find(bike => bike.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);

    if(matchingBike){
      this.titleFound = true;

      cardElements.forEach(card => {
        if(parseInt(card.id) === matchingBike.id){
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }

}
