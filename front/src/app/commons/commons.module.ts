import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { PictureListComponent } from './picture-list/picture-list.component';
import { PictureListItemComponent } from './picture-list-item/picture-list-item.component';

@NgModule({
  declarations: [
    NavigationComponent,
    PictureListComponent,
    PictureListItemComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavigationComponent,
    PictureListComponent,
    PictureListItemComponent,
  ],
})
export class CommonsModule {}
