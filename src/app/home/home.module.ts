import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { TopThreeComponent } from './components/top-three/top-three.component';



@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    TopThreeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
