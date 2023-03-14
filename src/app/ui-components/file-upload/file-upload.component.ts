import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() data: any;
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  fileName = ''

  constructor() { }

  ngOnInit(): void {
  }
  onInputChange(event: any) {
    this.fileName = event?.target?.files[0]?.name;
    const value = {event, fileName: this.fileName};
    this.inputChange.next(value);
  }

}
