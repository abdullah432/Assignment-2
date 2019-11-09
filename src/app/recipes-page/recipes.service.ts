import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { AddRecipePage } from './add-recipe/add-recipe.page';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'id1',
      title: 'Schnitzel',
      imageUrl: 'https://toriavey.com/images/2011/02/IMG_1544.jpg',
      ingradiant: ['Friench Fries', 'Salad']
    },
    {
      id: 'id2',
      title: 'Spaghetti',
      imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
      ingradiant: ['Meat', 'Tomatos']
    }
  ];

  constructor() { }

  getAllRecipes() {
    // return copy of recipes
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    // // will return object
    // return this.recipes.find( recipe => { // recipe is like iterator
    //     return recipe.id === recipeId;
    // });

    // will return copy of object
        return {
          ...this.recipes.find( recipe => { // recipe is like iterator
            return recipe.id === recipeId;
        })
      };

  }

  deleteItem(recipeId) {
    // why not working
    // delete this.recipes[this.recipes.findIndex( recipe =>
    //   recipe.id === recipeId
    // )];

    this.recipes = this.recipes.filter(e => {
      return e.id !== recipeId;
    });
  }

  addRecipe(title, imageUrl, ingradiant) {
    let id: string;
    let count = 0;
    for (let i of this.recipes) {
        count++;
    }

    id = 'id' + count;

    const item = {
        id,
        title,
        imageUrl,
        ingradiant
      };

    this.recipes.push(item);

  }
  addRecipeObj(obj){
    let id: string;
    let count = 1;
    for (let i of this.recipes) {
        count++;
    }

    id = 'id' + count;

    obj.id = id;
    console.log('obj', obj);
    this.recipes.push(obj);

  }
}
