import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage implements OnInit {

  addRecipeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private recipeServices: RecipesService
    ) { }

  ngOnInit() {
    this.formInitializer();
  }
  formInitializer() {
    this.addRecipeForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      imageUrl: [null, [Validators.required]],
      ingradiant: [null, [Validators.required]]
    });
  }

  addRecipe() {
    console.log(this.addRecipeForm.value);
    console.log(this.addRecipeForm.valid);
    this.recipeServices.addRecipeObj(this.addRecipeForm.value);
  }

}
