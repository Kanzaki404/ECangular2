import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { RemoveArticleComponent } from './remove-article/remove-article.component';
import { HomeComponent } from './home/home.component';
import { RecentComponent } from './recent/recent.component';
import { AllComponent } from './all/all.component';
import { FormsModule }   from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

const appRoutes:Routes = [
  {path: '', component: HomeComponent },
  {path: 'recent', component: RecentComponent },
  {path: 'all', component: AllComponent },
  {path: 'add', component: AddArticleComponent },
  {path: 'remove', component: RemoveArticleComponent },


]

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    RemoveArticleComponent,
    HomeComponent,
    RecentComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})//scrollPositionRestoration is used to go to the top of the page when routing from bottom of the page ex: cancell button at add article
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
