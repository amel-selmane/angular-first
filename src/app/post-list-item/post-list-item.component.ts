import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() loveIts: number = 0;
  @Input() createdAt?: Date;

  constructor() { }

  ngOnInit(): void {
  }

  increaseLove() {
    this.loveIts++;
  }

  decreaseLove() {
    this.loveIts--;
  }
}
