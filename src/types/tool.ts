
export interface Tool {
  id: string;
  name: string;
  description: string;
  logo?: string;
  category: string;
  subcategory?: string;
  features?: string[];
  pricing: string;
  tags?: string[];
  website: string;
  featured?: boolean;
  trending?: boolean;
  dateAdded: string;
  lastVerified?: string;
}
