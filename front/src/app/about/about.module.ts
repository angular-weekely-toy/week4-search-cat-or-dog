import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from './about.component';
import { CommonsModule } from '../commons/commons.module';
@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, CommonsModule, HttpClientModule],
  exports: [AboutComponent],
})
export class AboutModule {}
