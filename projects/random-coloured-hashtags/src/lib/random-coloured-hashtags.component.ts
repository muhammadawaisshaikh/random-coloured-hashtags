import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-random-coloured-hashtags',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="hashtag-container">
      @for (hashtag of hashtags; track $index) {
        <span [ngStyle]="{'background': hashtag.color, 'color': '#fff', 'padding': '5px', 'border-radius': '5px'}" class="hashtag">
            {{ hashtag.text }}
          </span>
      }
    </div>
  `,
  styles: [`
    .hashtag-container {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
    .hashtag {
      font-size: 1.2em;
      font-weight: bold;
    }
  `]
})
export class RandomColouredHashtagsComponent {
  @Input() count: number = 5; // Default number of hashtags
  @Input() hashtagsList: string[] = ['#Angular', '#JavaScript', '#WebDevelopment', '#CSS', '#HTML'];

  hashtags: { text: string; color: string }[] = [];

  constructor() {
    this.generateHashtags();
  }

  generateHashtags() {
    this.hashtags = [];
    for (let i = 0; i < this.count; i++) {
      const randomIndex = Math.floor(Math.random() * this.hashtagsList.length);
      const gradient = this.getRandomGradient();
      this.hashtags.push({
        text: this.hashtagsList[randomIndex],
        color: gradient
      });
    }
  }

  getRandomGradient(): string {
    const color1 = this.getRandomColor();
    const color2 = this.getRandomColor();
    const angle = Math.floor(Math.random() * 360); // Random angle for the gradient
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
