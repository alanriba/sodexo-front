import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'favoritos', component: FavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
