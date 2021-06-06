import { Component, Input } from '@angular/core';
import { Post } from '../main';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    const date: Date = new Date();
  }

  @Input() posts: Post[] = [
    {
      title: "Mon premier post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora voluptas velit explicabo temporibus vero.",
      loveIts: 0,  
      createdAt: new Date()
    },
    {
      title: "Mon deuxième post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora voluptas velit explicabo temporibus vero.",  
      loveIts: 0,
      createdAt: new Date()
    },
    {
      title: "Mon dernier post",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tempora voluptas velit explicabo temporibus vero.",  
      loveIts: 0,  
      createdAt: new Date()
    }
  ]

  
}