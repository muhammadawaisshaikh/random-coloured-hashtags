# RandomColouredHashtagsLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## To use the random-coloured-hashtags library in your Angular application, follow these steps:

### Install the library:
```bash 
npm install random-coloured-hashtags
```

### Import the module in your application module / standalone component imports:
```typescript
import { RandomColouredHashtagsModule } from 'random-coloured-hashtags';

@NgModule({
  declarations: [/* your components */],
  imports: [
    RandomColouredHashtagsModule,
    /* other modules */
  ],
  bootstrap: [/* your main component */]
})
export class AppModule { }
```

OR

```typescript
import { Component } from '@angular/core';
import { RandomColouredHashtagsModule } from 'random-coloured-hashtags';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RandomColouredHashtagsModule],
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