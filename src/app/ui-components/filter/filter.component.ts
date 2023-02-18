import { Component, OnInit } from '@angular/core';
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
  searchManu = [
    {
      title: 'capet',
      expanded: false,
      subMenu: [
        { title: 'chair' },
        { title: 'play station' },
        { title: 'radio' },
        { title: 'milk' },
      ],
    },
    { title: 'sound', expanded: false, subMenu: [{ title: 'JBL' }] },
    { title: 'TV', expanded: false, subMenu: [{ title: 'Sumsung' }] },
  ];

  form = new FormGroup({});
  // cities: new FormGroup({}),
  constructor() {}

  ngOnInit(): void {
    this.buildForm();
    console.log(this.form);
  }

  expandItem(index: number): boolean {
    this.searchManu[index].expanded = !this.searchManu[index].expanded;
    return this.searchManu[index].expanded;
  }

  onCheckBoxClick(event: any, index: number) {
    event.stopPropagation();
  }

  buildForm(): void {
    this.searchManu.forEach((data) => {
      this.form.controls[data.title] = new FormGroup({});
      data.subMenu.forEach((item) => {
        (this.form.controls[data.title] as FormGroup).addControl(
          item.title,
          new FormControl(false)
        );
      });
    });
  }

  setFormValue(groupName: string, controlNmame: string): void {
    const value = !this.form.get(groupName)?.get(controlNmame)?.value;
    this.form.get(groupName)?.get(controlNmame)?.setValue(value);

    console.log(this.form.value);
  }
}
