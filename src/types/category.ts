
export interface Category {
  id: string;
  name: string;
  count: number;
  subcategories?: {
    name: string;
    count: number;
  }[];
}
