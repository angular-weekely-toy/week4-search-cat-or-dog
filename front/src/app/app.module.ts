import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { ErrorsModule } from './errors/errors.module';
import { LikeModule } from './like/like.module';
import { BreedModule } from './breed/breed.module';
import { AboutModule } from './about/about.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LikeModule,
    BreedModule,
    AboutModule,
    CommonsModule,
    ErrorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
