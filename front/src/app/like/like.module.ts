import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonsModule } from '../commons/commons.module';

@NgModule({
  declarations: [LikeComponent],
  imports: [CommonModule, HttpClientModule, CommonsModule],
  exports: [LikeComponent],
})
export class LikeModule {}
