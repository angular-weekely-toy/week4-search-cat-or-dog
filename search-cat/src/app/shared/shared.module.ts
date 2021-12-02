import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module'
import { PipesModule } from './pipes/pipes.module'
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [
    
  ]
})
export class SharedModule { }
