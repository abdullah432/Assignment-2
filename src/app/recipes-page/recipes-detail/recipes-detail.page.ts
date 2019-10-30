import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activateRoute: ActivatedRoute,
    private alertConroller: AlertController,
    private router: Router,
    private recipeServices: RecipesService
    ) { }

  ngOnInit() {
    // observable
    // observable should be subscribe to get data
    this.activateRoute.paramMap.subscribe( paramMp => {
      // recipeId is define in app-routing.module.ts
      const recipeId = paramMp.get('recipeId');
      this.loadedRecipe = this.recipeServices.getRecipe(recipeId);
    });
  }

  async deleteRecipe() {
    console.log('delete: ', 'deleteDone');
    console.log('id: ', this.loadedRecipe.id);

    const alert = await this.alertConroller.create({
      header: 'Alert',
      message: 'Are You Sure, You want to delete this recipe',
      buttons: [
        {
        text: 'Cancel'
        },
        {
          text: 'OK',
          handler: () => {
            this.recipeServices.deleteItem(this.loadedRecipe.id);
            this.router.navigateByUrl('/recipes-page');
          }
        }
      ]
    });

    alert.present();
  }

}
