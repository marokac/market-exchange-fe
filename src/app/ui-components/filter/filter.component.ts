import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  @Output() inputChange: EventEmitter<any> = new EventEmitter();
  @Input() searchManu: any[] = [];

  form = new FormGroup({});
  // cities: new FormGroup({}),
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.form);
  }

  expandItem(index: number): boolean {
    this.searchManu[index].expanded = !this.searchManu[index].expanded;
    return this.searchManu[index].expanded;
  }

  onCheckBoxClick(event: any, groupName: string, controlNmame: string) {
    const value = event.target.checked;
    this.setFormValue(groupName, controlNmame, value);
    event.stopPropagation();
  }

  buildForm(): void {
    this.searchManu.forEach((data) => {
      this.form.controls[data.title] = new FormGroup({});
      data.subMenu.forEach((item:any) => {
        (this.form.controls[data.title] as FormGroup).addControl(
          item.title,
          new FormControl(false)
        );
      });
    });
  }

  setFormValue(groupName: string, controlNmame: string, value: any): void {
    this.form.patchValue(this.form.get(groupName)?.value);
    const formValues = []
    for (let key in this.form.value) {
      const selected = []
      for (let k in this.form.value[key]) {
     
        if (this.form.value[key][k]) {
          selected.push(k);
        }
     
      }
      if(selected.length){
        formValues.push({ category: key, value: selected.join() })
      }
    }
    this.inputChange.emit(formValues);
    console.log( formValues);

    this.cdr.detectChanges();

  }

}
