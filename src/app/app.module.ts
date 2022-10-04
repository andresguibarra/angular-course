import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { SuccessAlertComponent } from './task-one/success-alert/success-alert.component'
import { WarningAlertComponent } from './task-one/warning-alert/warning-alert.component'
import { TwoWayDatabindingComponent } from './task-two/two-way-databinding/two-way-databinding.component'
import { TaskThreeComponent } from './task-three/task-three.component'
import { HeaderComponent } from './header/header.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'
import { EvenComponent } from './task-four/even/even.component'
import { OddComponent } from './task-four/odd/odd.component'
import { GameControlComponent } from './task-four/game-control/game-control.component'
import { TaskFourComponent } from './task-four/task-four.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    TwoWayDatabindingComponent,
    TaskThreeComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    TaskFourComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
