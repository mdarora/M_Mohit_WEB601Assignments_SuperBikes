import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { MessageService } from './services/message.service';
import { SuperBikeService } from './services/super-bike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'M_Mohit_SuperBikes';
  bikeId:number = 8;
  oneBikeById: any = {};

  constructor(private SuperBikeService: SuperBikeService){}

  ngOnInit(){
    this.findBikeById();
  }

  findBikeById(){
    this.SuperBikeService.getBikeById(this.bikeId).subscribe(result => {
      if (typeof result === "object"){
        this.oneBikeById = result;
      }
    });
  }
}
