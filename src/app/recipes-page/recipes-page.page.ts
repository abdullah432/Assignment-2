import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.page.html',
  styleUrls: ['./recipes-page.page.scss'],
})
export class RecipesPagePage implements OnInit {

  recipes: Recipe[];
  faCoffee = fas;

  // by making it private now we can access it
  // through out class not only in constructor
  constructor(
    private recipesService: RecipesService,
    private router: Router
    ) {
   }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  // ionViewDidEnter runs when the page has fully entered and is now the active page
  ionViewDidEnter() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('after delete', this.recipes);
  }

}
