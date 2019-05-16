import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ReviewComponent } from './assignment/review/review.component';
import { ThumbnailComponent } from './assignment/thumbnail/thumbnail.component';
import { TitleComponent } from './assignment/title/title.component';
import { DescriptionComponent } from './assignment/description/description.component';
import { InfoComponent } from './assignment/info/info.component';
import { ConsumeparentComponent } from './consume/consumeparent/consumeparent.component';
import { ConsumechildComponent } from './consume/consumechild/consumechild.component';
import { Consumechild2Component } from './consume/consumechild2/consumechild2.component';
import { Routes, RouterModule } from '@angular/router';


const myRoutes: Routes = [
  
  
  {
    path: 'review',
    component: ReviewComponent
  },

  {
    path: 'consume',
    component: ConsumeparentComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReviewComponent,
    ThumbnailComponent,
    TitleComponent,
    DescriptionComponent,
    InfoComponent,
    ConsumeparentComponent,
    ConsumechildComponent,
    Consumechild2Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
