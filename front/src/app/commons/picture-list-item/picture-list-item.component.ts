import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-picture-list-item',
  templateUrl: './picture-list-item.component.html',
  styleUrls: ['./picture-list-item.component.scss'],
})
export class PictureListItemComponent implements OnInit {
  @Input() item!: any;
  @Input() src!: string;
  @Input() title?: string;

  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    // console.log(this.item);
  }

  handleClick() {
    this.onClick.emit(this.item);
  }
}
