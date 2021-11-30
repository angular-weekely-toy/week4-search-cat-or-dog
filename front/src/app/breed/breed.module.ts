import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { HttpClientModule } from '@angular/common/http';

import { BreedComponent } from './breed.component';

@NgModule({
  declarations: [BreedComponent],
  imports: [CommonModule, CommonsModule, HttpClientModule],
  exports: [BreedComponent],
})
export class BreedModule {}
