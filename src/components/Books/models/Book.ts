export interface Book {
  title: string;
  description: string;
  image: string;
  pages: number;
  length: string;
  price: number;
  type: "print" | "digital" | "vinilo";
}
