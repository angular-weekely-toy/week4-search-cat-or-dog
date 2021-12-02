import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelsModule } from './models/models.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [
    CommonModule,
    ModelsModule,
    ServicesModule
  ],
  declarations: [
    
  ]
})
export class CoreModule { }
