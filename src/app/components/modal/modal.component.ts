import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatTabChangeEvent, MatTabGroup} from '@angular/material/tabs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  currentTap = 0;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    if(this.data === 'JOIN'){
      this.currentTap = 1;
    }
  }

  tabChanged(e:MatTabChangeEvent){
    this.currentTap = e.index;
  }
}
