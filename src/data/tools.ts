import { Tool } from '@/types/tool';

export const initialTools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced language model that can generate human-like text, answer questions, and assist with various tasks through conversation.',
    logo: 'https://images.unsplash.com/photo-1681826256409-5b4b46f1747e?w=500',
    category: 'Natural Language Processing',
    subcategory: 'Chatbots',
    features: [
      'Conversational AI',
      'Content generation',
      'Question answering',
      'Code assistance'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'ChatBot', 'OpenAI', 'GPT'],
    website: 'https://chat.openai.com',
    featured: true,
    trending: true,
    dateAdded: '2023-11-30',
    lastVerified: '2025-05-01'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI art generator that creates stunning images from text descriptions, perfect for designers, artists, and creatives.',
    logo: 'https://images.unsplash.com/photo-1675526193139-c4e3fb1e655a?w=500',
    category: 'Design',
    subcategory: 'Graphics',
    features: [
      'Text-to-image generation',
      'Style customization',
      'High-resolution output',
      'Variations system'
    ],
    pricing: 'Paid',
    tags: ['AI', 'Art', 'Design', 'Image Generation'],
    website: 'https://midjourney.com',
    featured: true,
    trending: true,
    dateAdded: '2023-10-15',
    lastVerified: '2025-05-01'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps developers write better code faster by suggesting whole lines or blocks of code as you type.',
    logo: 'https://images.unsplash.com/photo-1661661563880-80d092a2e77b?w=500',
    category: 'Developer Tools',
    subcategory: 'Code Generation',
    features: [
      'Code completion',
      'Function suggestions',
      'Comment-to-code conversion',
      'IDE integration'
    ],
    pricing: 'Paid',
    tags: ['AI', 'Coding', 'Programming', 'Developer'],
    website: 'https://github.com/features/copilot',
    featured: true,
    dateAdded: '2023-09-10',
    lastVerified: '2025-04-28'
  },
  {
    id: 'dall-e',
    name: 'DALL-E',
    description: 'AI system that creates realistic images and art from natural language descriptions.',
    logo: 'https://images.unsplash.com/photo-1686920740746-957385860457?w=500',
    category: 'Design',
    subcategory: 'Graphics',
    features: [
      'Text-to-image generation',
      'Image editing',
      'Variations',
      'Outpainting'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'Art', 'Image Generation', 'OpenAI'],
    website: 'https://openai.com/dall-e-3',
    trending: true,
    dateAdded: '2023-11-02',
    lastVerified: '2025-05-03'
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI content platform that helps teams create high-quality content for marketing, sales, product, and more.',
    logo: 'https://images.unsplash.com/photo-1682336777201-3c82b078ee5a?w=500',
    category: 'Content Creation',
    subcategory: 'Blog Writing',
    features: [
      'Blog post writing',
      'Email copywriting',
      'Social media content',
      'Template library'
    ],
    pricing: 'Paid',
    tags: ['AI', 'Content', 'Writing', 'Marketing'],
    website: 'https://jasper.ai',
    dateAdded: '2023-08-20',
    lastVerified: '2025-04-15'
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one audio/video editing platform with AI transcription, voice generation, and editing features.',
    logo: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500',
    category: 'Audio/Video',
    subcategory: 'Video Editing',
    features: [
      'AI transcription',
      'Text-based editing',
      'Voice generation',
      'Screen recording'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'Video', 'Audio', 'Editing'],
    website: 'https://www.descript.com',
    dateAdded: '2023-07-15',
    lastVerified: '2025-04-10'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion that helps draft, edit, and summarize content right in your notes and documents.',
    logo: 'https://images.unsplash.com/photo-1568944116300-8f939a92272d?w=500',
    category: 'Productivity',
    subcategory: 'Writing',
    features: [
      'Draft writing',
      'Summarization',
      'Translation',
      'Brainstorming'
    ],
    pricing: 'Paid',
    tags: ['AI', 'Writing', 'Productivity', 'Notes'],
    website: 'https://www.notion.so/product/ai',
    trending: true,
    dateAdded: '2023-06-18',
    lastVerified: '2025-04-20'
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'Writing assistant that uses AI to check for grammar, spelling, punctuation, clarity, engagement, and delivery mistakes.',
    logo: 'https://images.unsplash.com/photo-1672845977730-050e4e1d2104?w=500',
    category: 'Productivity',
    subcategory: 'Writing',
    features: [
      'Grammar checking',
      'Style suggestions',
      'Tone detection',
      'Browser extension'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'Writing', 'Grammar', 'Productivity'],
    website: 'https://www.grammarly.com',
    featured: true,
    dateAdded: '2023-05-22',
    lastVerified: '2025-04-05'
  },
  {
    id: 'gpt4all',
    name: 'GPT4All',
    description: 'Open-source ecosystem of large language models that run locally on your CPU, enabling private AI interactions.',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500',
    category: 'Natural Language Processing',
    subcategory: 'Text Generation',
    features: [
      'Local execution',
      'Privacy-focused',
      'No internet required',
      'Open source'
    ],
    pricing: 'Free',
    tags: ['AI', 'Open Source', 'Local LLM', 'Privacy'],
    website: 'https://gpt4all.io',
    dateAdded: '2023-04-30',
    lastVerified: '2025-04-25'
  },
  {
    id: 'anthropic-claude',
    name: 'Claude',
    description: 'Conversational AI assistant that can perform a wide range of tasks, with capabilities for longer context and nuanced conversations.',
    logo: 'https://images.unsplash.com/photo-1680966003548-3448b7e246f6?w=500',
    category: 'Natural Language Processing',
    subcategory: 'Chatbots',
    features: [
      'Long context windows',
      'Nuanced conversation',
      'Content generation',
      'Reasoning capabilities'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'ChatBot', 'Anthropic', 'Assistant'],
    website: 'https://claude.ai',
    trending: true,
    dateAdded: '2023-03-15',
    lastVerified: '2025-05-05'
  },
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    description: 'AI-powered search engine that provides informative responses with cited sources for all your queries.',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500',
    category: 'Research',
    subcategory: 'Data Analysis',
    features: [
      'Cited sources',
      'Follow-up questions',
      'Current information',
      'Document analysis'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'Search', 'Research', 'Citations'],
    website: 'https://www.perplexity.ai',
    trending: true,
    featured: true,
    dateAdded: '2023-12-10',
    lastVerified: '2025-05-06'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice technology that generates realistic speech in different languages and voices with human-like quality.',
    logo: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=500',
    category: 'Audio/Video',
    subcategory: 'Voice Synthesis',
    features: [
      'Voice cloning',
      'Text-to-speech',
      'Multilingual support',
      'Voice design'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'Audio', 'Voice', 'Text-to-Speech'],
    website: 'https://elevenlabs.io',
    dateAdded: '2023-02-28',
    lastVerified: '2025-04-01'
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Open-source text-to-image AI model that can generate detailed images based on text descriptions, with options for local installation.',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500',
    category: 'Design',
    subcategory: 'Graphics',
    features: [
      'Text-to-image generation',
      'Open source deployment',
      'Local installation',
      'Community-driven improvements'
    ],
    pricing: 'Free',
    tags: ['AI', 'Art', 'Open Source', 'Image Generation'],
    website: 'https://stability.ai/stable-diffusion',
    featured: true,
    dateAdded: '2023-05-15',
    lastVerified: '2025-04-22'
  },
  {
    id: 'bard',
    name: 'Google Bard',
    description: 'Google\'s conversational AI service powered by the Gemini model, offering real-time information access and multimodal capabilities.',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500',
    category: 'Natural Language Processing',
    subcategory: 'Chatbots',
    features: [
      'Up-to-date information',
      'Multimodal inputs',
      'Google ecosystem integration',
      'Code generation'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'ChatBot', 'Google', 'Assistant'],
    website: 'https://bard.google.com',
    trending: true,
    dateAdded: '2023-07-12',
    lastVerified: '2025-05-01'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'AI community platform offering thousands of pre-trained models for NLP, computer vision, and audio tasks, with easy deployment options.',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500',
    category: 'Developer Tools',
    subcategory: 'Model Hub',
    features: [
      'Pre-trained models',
      'Model sharing',
      'Datasets',
      'Deployment tools'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'NLP', 'Models', 'Open Source'],
    website: 'https://huggingface.co',
    featured: true,
    dateAdded: '2023-06-10',
    lastVerified: '2025-04-18'
  },
  {
    id: 'openai-api',
    name: 'OpenAI API',
    description: 'API access to OpenAI\'s powerful AI models like GPT-4 and DALL-E for integration into applications, products, and services.',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500',
    category: 'Developer Tools',
    subcategory: 'API Services',
    features: [
      'Access to GPT models',
      'Image generation',
      'Fine-tuning capabilities',
      'Moderation tools'
    ],
    pricing: 'Paid',
    tags: ['AI', 'API', 'Developer', 'OpenAI'],
    website: 'https://openai.com/api',
    featured: true,
    dateAdded: '2023-08-22',
    lastVerified: '2025-05-02'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Platform for running machine learning models in the cloud with a simple API, supporting various open-source models.',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500',
    category: 'Developer Tools',
    subcategory: 'Cloud Services',
    features: [
      'Simple API',
      'Open-source model hosting',
      'Pay-per-use pricing',
      'Custom model deployment'
    ],
    pricing: 'Paid',
    tags: ['AI', 'Cloud', 'API', 'Models'],
    website: 'https://replicate.com',
    dateAdded: '2023-09-18',
    lastVerified: '2025-04-25'
  },
  {
    id: 'runwayml',
    name: 'Runway',
    description: 'Creative suite powered by AI that enables video editing, generation, and visual effects for creators and professionals.',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500',
    category: 'Audio/Video',
    subcategory: 'Video Editing',
    features: [
      'Video generation',
      'Motion tracking',
      'Image to video',
      'Inpainting'
    ],
    pricing: 'Paid',
    tags: ['AI', 'Video', 'Creative', 'Editing'],
    website: 'https://runwayml.com',
    trending: true,
    dateAdded: '2023-04-05',
    lastVerified: '2025-04-30'
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation platform that creates professional videos with virtual presenters speaking from text input in multiple languages.',
    logo: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500',
    category: 'Audio/Video',
    subcategory: 'Video Generation',
    features: [
      'AI avatars',
      'Text-to-video',
      'Multilingual support',
      'Custom backgrounds'
    ],
    pricing: 'Paid',
    tags: ['AI', 'Video', 'Avatar', 'Content'],
    website: 'https://www.synthesia.io',
    dateAdded: '2023-03-20',
    lastVerified: '2025-04-15'
  },
  {
    id: 'langchain',
    name: 'LangChain',
    description: 'Framework for developing applications powered by language models, with tools for prompt management, chaining, and data augmentation.',
    logo: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=500',
    category: 'Developer Tools',
    subcategory: 'Framework',
    features: [
      'LLM integration',
      'Prompt chaining',
      'Memory management',
      'Tool integration'
    ],
    pricing: 'Free',
    tags: ['AI', 'Developer', 'Framework', 'Open Source'],
    website: 'https://langchain.com',
    trending: true,
    dateAdded: '2023-04-12',
    lastVerified: '2025-05-03'
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriting assistant that helps create marketing copy, content, and ideas for blogs, ads, emails, and social media.',
    logo: 'https://images.unsplash.com/photo-1682336777201-3c82b078ee5a?w=500',
    category: 'Content Creation',
    subcategory: 'Copywriting',
    features: [
      'Blog outlines',
      'Social media content',
      'Email copy',
      'Ad creation'
    ],
    pricing: 'Freemium',
    tags: ['AI', 'Writing', 'Marketing', 'Content'],
    website: 'https://www.copy.ai',
    dateAdded: '2023-02-18',
    lastVerified: '2025-04-10'
  }
];
