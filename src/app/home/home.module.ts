import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { TextBarComponent } from './components/text-bar/text-bar.component';
import { DetailsCardComponent } from './components/details-card/details-card.component';
import localePt from '@angular/common/locales/pt';
import { InConstructionComponent } from './pages/in-construction/in-construction.component';

registerLocaleData(localePt, 'pt-BR')

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    TextBarComponent,
    DetailsCardComponent,
    InConstructionComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        },
        {
            provide:  DEFAULT_CURRENCY_CODE,
            useValue: 'BRL'
        },
    ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
