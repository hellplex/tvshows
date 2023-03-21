import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/routes/app-routing.module';



bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(AppRoutingModule, HttpClientModule)
    ],
  });