import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { SuperBikeService } from '../services/super-bike.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultBike: string = '/assets/images/drawBike.jpg';

  constructor(private route:ActivatedRoute, private SuperBikeService:SuperBikeService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.SuperBikeService.getBikeById(this.id).subscribe(bike => {
        this.content = bike;
      })
    });
  }

  handleClick(content: Content){
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
}
