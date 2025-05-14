
import { useState } from 'react';
import ToolsGrid from '@/components/ToolsGrid';
import CategorySidebar from '@/components/CategorySidebar';
import SearchBar from '@/components/SearchBar';
import SchemaMarkup from '@/components/SchemaMarkup';
import { initialTools } from '@/data/tools';
import { categories } from '@/data/categories';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    if (category) {
      toast({
        title: `Category: ${category}`,
        description: `Showing tools in the ${category} category`,
      });
    } else {
      toast({
        title: "All Categories",
        description: "Showing tools from all categories",
      });
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handlePriceFilter = (price: string | null) => {
    setPriceFilter(price);
  };

  // Filter tools based on category, search query and price
  const filteredTools = initialTools.filter((tool) => {
    const matchesCategory = !activeCategory || tool.category === activeCategory;
    const matchesSearch = !searchQuery || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = !priceFilter || tool.pricing === priceFilter;
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Schema Markup */}
      <SchemaMarkup tools={filteredTools} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">AI Tools Directory</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the best AI tools to boost your productivity, creativity, and development workflows.
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      <div className="container px-4 mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64 shrink-0">
            <CategorySidebar 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange} 
              onPriceFilter={handlePriceFilter}
              priceFilter={priceFilter}
            />
          </aside>
          
          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">
                {activeCategory ? activeCategory : "All Tools"} 
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({filteredTools.length} tools)
                </span>
              </h2>
            </div>

            {filteredTools.length > 0 ? (
              <ToolsGrid tools={filteredTools} />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>No Tools Found</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>No AI tools match your current filters. Try adjusting your search criteria.</p>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>

      {/* FAQ Section for AEO */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>What are AI tools?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI tools are software applications powered by artificial intelligence that can perform tasks, generate content, analyze data, or automate processes that typically require human intelligence.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How do I choose the right AI tool?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Consider your specific needs, budget, technical requirements, and the tool's features. Our directory provides detailed information to help you compare different options and make an informed decision.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are AI tools expensive?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI tools come in various pricing tiers. Many offer free plans or trials, while others use freemium models. Enterprise solutions typically have higher costs but provide more features and capabilities.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do I need technical skills to use AI tools?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Not necessarily. Many modern AI tools are designed with user-friendly interfaces for non-technical users. However, developer-focused tools may require programming knowledge or technical expertise.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-muted py-8">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 AI Tools Directory - Discover and compare the best AI tools
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
