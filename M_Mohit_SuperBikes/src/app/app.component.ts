import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
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
    this.SuperBikeService.getBikeById(this.bikeId).subscribe(content => this.oneBikeById = content);
  }
}
