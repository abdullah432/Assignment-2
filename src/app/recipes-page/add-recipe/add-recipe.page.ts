import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  addRecipeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInitializer();
  }
  formInitializer() {
    this.addRecipeForm = this.formBuilder.group({
      name: null,
      email: null,
      address: null,
      gender: null,
      city: null
    });
  }

}
