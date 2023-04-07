import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newBike: any = {};
  @Output() addBikeEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog, private MessageService: MessageService){}

  openDialog(){
    const dialogRef = this.dialog.open(AddContentDialogComponent,{
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(newBikeFromDialog => {
      if(newBikeFromDialog){
        if(newBikeFromDialog.title && newBikeFromDialog.description && newBikeFromDialog.creator){
          this.newBike = newBikeFromDialog;
          this.addNewBike();
        } else {
          this.MessageService.add('No content added. Required fields were empty');
        }
      }
    });
  }
  addNewBike(){
    this.addBikeEvent.emit(this.newBike);
    this.newBike = {};
  }
}
