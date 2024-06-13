export interface Book {
  id: string;
  title: string;
  description: string;
  image: string;
  pages: number;
  length: string;
  price: number;
  type: "print" | "digital" | "vinilo";
  publisher: string;
  language: string;
  isbn: string;
  dimensions?: string;
}
