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

  constructor(private SuperBikeService: SuperBikeService){}

  ngOnInit(){}

}
