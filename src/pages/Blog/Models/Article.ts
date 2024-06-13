interface SubContent {
  id: string;
  quote: string;
  title: string;
  description: string;
  list: string[];
}

export interface Article {
  id: string;
  image: string;
  title: string;
  description: string;
  date: string;
  subContent: SubContent[];
}
