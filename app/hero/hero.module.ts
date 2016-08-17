import { NgModule }           from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

//import { SharedModule }       from '../shared/shared.module';
import { HighlightDirective } from './highlight.directive';

import { HeroComponent }      from './hero.component';
import { HeroDetailComponent }         from './hero-detail.component';
import { HeroListComponent }           from './hero-list.component';
import { routing }            from './hero.routing';

/*
 * TODO: Remove THE HeroService class and provider after
 * https://github.com/angular/angular/pull/10579 lands
 */
import { HeroService } from './hero.service';

@NgModule({
  imports: [ CommonModule, FormsModule, routing ],
  providers: [ HeroService ],
  declarations: [
    HeroComponent, HeroDetailComponent, HeroListComponent,
    HighlightDirective
  ]
})
export default class HeroModule { }
