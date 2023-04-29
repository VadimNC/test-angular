import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // реактивная форма
  // myForm: FormGroup = new FormGroup({
  //   name: new FormControl('Vadym'),
  //   age: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
  //   profession: new FormControl('')
  // });
// шаблонная форма
  /*  @ViewChild('myForm') form!: NgForm;
    submitForm() {
      console.log(this.form);
      // this.form.reset();
    }*/

  ngOnInit(): void {
  }

  submitForm() {
    // console.log('FORM= ', this.myForm);
  }

}
