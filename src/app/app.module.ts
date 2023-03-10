import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchBarComponent,
    ShowListComponent,
    ShowDetailComponent,
    StarRatingComponent,
    NoResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
