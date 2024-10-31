# RandomColouredHashtagsLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## To use the random-coloured-hashtags library in your Angular application, follow these steps:

### Install the library:
```bash 
npm install random-coloured-hashtags
```

### Import the component in imports:
```typescript
import { Component } from '@angular/core';
import { RandomColouredHashtagsComponent } from 'random-coloured-hashtags';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RandomColouredHashtagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
...
}
```

### Use the component in your template:
```typescript
<lib-random-coloured-hashtags 
    [count]="5" 
    [hashtagsList]="['#Angular', '#JavaScript', '#WebDevelopment']">
</lib-random-coloured-hashtags>
```