import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-controls',
  templateUrl: './demo-form-controls.component.html',
  styleUrls: ['./demo-form-controls.component.scss'],
})
export class DemoFormControlsComponent implements OnInit {
  form: FormGroup;

  items = ["Belgium", "Germany", "Spain", "Italy", "Netherlands"];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['Avit', [Validators.required, Validators.maxLength(15)]],
      age: [40, Validators.required],
      married: [true],
      country: [{ value: '' , disabled: false }],
    });

    this.form.get('country').setValue(this.items[0]);
  }

  handleSubmit() {
    console.log('Name:' + this.form.get('name').value);
    console.log('Age:' + this.form.get('age').value);
    console.log('Married:' + this.form.get('married').value);
    console.log('Country:' + this.form.get('country').value);
  }

}
