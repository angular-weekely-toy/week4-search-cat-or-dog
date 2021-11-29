import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedComponent } from './breed/breed.component';
import { AboutComponent } from './about/about.component';
import { LikeComponent } from './like/like.component';
import { CommonsModule } from './commons/commons.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  declarations: [AppComponent, BreedComponent, AboutComponent, LikeComponent],
  imports: [BrowserModule, AppRoutingModule, CommonsModule, ErrorsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
