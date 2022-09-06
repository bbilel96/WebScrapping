import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }
  activeErrorInput(form: FormGroup): FormGroup{
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }
    return form;
  }
}
