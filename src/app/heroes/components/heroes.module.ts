import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent

  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class HeroesModule {

 }
