declare module 'random-coloured-hashtags' {
    export interface Hashtag {
      text: string;
      color: string;
    }
  
    export class RandomColouredHashtagsComponent {
      count: number;
      hashtagsList: string[];
      hashtags: Hashtag[];
      constructor();
      generateHashtags(): void;
    }
  }