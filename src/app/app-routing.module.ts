import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'recipes-page', pathMatch: 'full' },
  {
    path: 'recipes-page',
    children: [
      {
        path: '',
        loadChildren: './recipes-page/recipes-page.module#RecipesPagePageModule'
      },
      {
        path: ':recipeId',
        loadChildren: './recipes-page/recipes-detail/recipes-detail.module#RecipesDetailPageModule'
      }
    ]
  },
  { path: 'add-recipe', loadChildren: './recipes-page/add-recipe/add-recipe.module#AddRecipePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
