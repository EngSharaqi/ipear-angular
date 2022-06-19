import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { CleanersComponent } from './cleaners/cleaners.component';
import { SterileComponent } from './sterile/sterile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cosmetics',
    component: CosmeticsComponent
  },
  {
    path: 'sterile',
    component: SterileComponent
  },
  {
    path: 'cleaners',
    component: CleanersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
