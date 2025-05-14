
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Category } from '@/types/category';

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onPriceFilter: (price: string | null) => void;
  priceFilter: string | null;
}

const CategorySidebar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  onPriceFilter,
  priceFilter
}: CategorySidebarProps) => {
  const priceOptions = ["Free", "Freemium", "Paid", "Enterprise"];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="px-2 py-0">
          <div className="space-y-1">
            <Button
              variant={activeCategory === null ? "secondary" : "ghost"}
              className="w-full justify-start text-left"
              onClick={() => onCategoryChange(null)}
            >
              All Categories
              {activeCategory === null && (
                <Check className="ml-auto h-4 w-4" />
              )}
            </Button>
            
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.name ? "secondary" : "ghost"}
                className="w-full justify-start text-left"
                onClick={() => onCategoryChange(category.name)}
              >
                <span className="truncate">{category.name}</span>
                {activeCategory === category.name && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Pricing</CardTitle>
        </CardHeader>
        <CardContent className="px-2 py-0">
          <div className="space-y-1">
            <Button
              variant={priceFilter === null ? "secondary" : "ghost"}
              className="w-full justify-start text-left"
              onClick={() => onPriceFilter(null)}
            >
              All Pricing
              {priceFilter === null && (
                <Check className="ml-auto h-4 w-4" />
              )}
            </Button>
            
            {priceOptions.map((price) => (
              <Button
                key={price}
                variant={priceFilter === price ? "secondary" : "ghost"}
                className="w-full justify-start text-left"
                onClick={() => onPriceFilter(price)}
              >
                {price}
                {priceFilter === price && (
                  <Check className="ml-auto h-4 w-4" />
                )}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategorySidebar;
