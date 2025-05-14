
import { Tool } from '@/types/tool';

interface SchemaMarkupProps {
  tools: Tool[];
}

const SchemaMarkup = ({ tools }: SchemaMarkupProps) => {
  const toolsSchema = tools.map(tool => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "applicationCategory": "AIApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": tool.pricing === "Free" ? "0" : undefined,
      "priceCurrency": tool.pricing === "Free" ? "USD" : undefined
    },
    "description": tool.description
  }));

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Tools Directory",
    "description": "Discover the best AI tools to boost your productivity, creativity, and development workflows.",
    "url": window.location.origin
  };

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([websiteSchema, ...toolsSchema])
      }}
    />
  );
};

export default SchemaMarkup;
