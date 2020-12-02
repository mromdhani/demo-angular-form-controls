import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form-array',
  templateUrl: './demo-form-array.component.html',
  styleUrls: ['./demo-form-array.component.scss']
})
export class DemoFormArrayComponent implements OnInit {
  ngOnInit(): void {

  }

  userForm = new FormGroup({
    users: new FormArray([
      new FormControl('Driss'),
      new FormControl('Julien'),
      new FormControl()
    ])
  });
  get users(): FormArray {
     return this.userForm.get('users') as FormArray;
  }
  addUserField() {
     this.users.push(new FormControl());
  }
  deleteUserField(index: number) {
     this.users.removeAt(index);
  }
  onFormSubmit() {
    console.log(this.users.value); // Gives FormArray data
    console.log(this.userForm.value); // Gives Complete form data
    //Iterate FormArray
    for(let i = 0; i < this.users.length; i++) {
	  console.log(this.users.at(i).value);
    }
  }
}
