import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

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
import { DropdownDirective } from './shared/dropdown.directive'
import { TaskFiveComponent } from './task-five/task-five.component'
import { ActiveUsersComponent } from './task-five/active-users/active-users.component'
import { InactiveUsersComponent } from './task-five/inactive-users/inactive-users.component'
import { ShoppingListService } from './shopping-list/shopping-list.service'
import { AppRoutingModule } from './app-routing.module';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'
import { RecipeService } from './recipes/recipe.service'
import { TaskSixComponent } from './task-six/task-six.component';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    TwoWayDatabindingComponent,
    TaskThreeComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    TaskFourComponent,
    TaskFiveComponent,
    TaskSixComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipesStartComponent,
    RecipeEditComponent
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
