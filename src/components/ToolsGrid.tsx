
import { Tool } from '@/types/tool';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ToolsGridProps {
  tools: Tool[];
}

const ToolsGrid = ({ tools }: ToolsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <Card key={tool.id} className="flex flex-col h-full hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={tool.logo || '/placeholder.svg'} 
                  alt={`${tool.name} logo`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{tool.name}</h3>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-xs">
                    {tool.category}
                  </Badge>
                  <Badge 
                    variant={tool.pricing === "Free" ? "secondary" : 
                      tool.pricing === "Freemium" ? "outline" : "default"}
                    className="text-xs"
                  >
                    {tool.pricing}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-muted-foreground">{tool.description}</p>
            {tool.features && tool.features.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                <ul className="text-xs space-y-1">
                  {tool.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
          <Separator />
          <CardFooter className="pt-4">
            <a 
              href={tool.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-md text-center text-sm font-medium inline-flex items-center justify-center gap-2"
            >
              Visit Website
              <ExternalLink size={14} />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ToolsGrid;
