
import { Category } from '@/types/category';

export const categories: Category[] = [
  {
    id: 'nlp',
    name: 'Natural Language Processing',
    count: 5,
    subcategories: [
      { name: 'Chatbots', count: 3 },
      { name: 'Text Generation', count: 2 },
      { name: 'Translation', count: 1 }
    ]
  },
  {
    id: 'cv',
    name: 'Computer Vision',
    count: 3,
    subcategories: [
      { name: 'Image Recognition', count: 1 },
      { name: 'Object Detection', count: 1 },
      { name: 'Image Generation', count: 1 }
    ]
  },
  {
    id: 'audio-video',
    name: 'Audio/Video',
    count: 4,
    subcategories: [
      { name: 'Voice Synthesis', count: 1 },
      { name: 'Video Editing', count: 1 },
      { name: 'Video Generation', count: 1 },
      { name: 'Audio Enhancement', count: 1 }
    ]
  },
  {
    id: 'design',
    name: 'Design',
    count: 4,
    subcategories: [
      { name: 'UI/UX', count: 1 },
      { name: 'Graphics', count: 2 },
      { name: 'Prototyping', count: 1 }
    ]
  },
  {
    id: 'dev-tools',
    name: 'Developer Tools',
    count: 5,
    subcategories: [
      { name: 'Code Generation', count: 1 },
      { name: 'API Services', count: 1 },
      { name: 'Cloud Services', count: 1 },
      { name: 'Framework', count: 1 },
      { name: 'Model Hub', count: 1 }
    ]
  },
  {
    id: 'productivity',
    name: 'Productivity',
    count: 3,
    subcategories: [
      { name: 'Writing', count: 2 },
      { name: 'Note-taking', count: 1 }
    ]
  },
  {
    id: 'research',
    name: 'Research',
    count: 2,
    subcategories: [
      { name: 'Data Analysis', count: 1 },
      { name: 'Literature Review', count: 1 }
    ]
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    count: 4,
    subcategories: [
      { name: 'Blog Writing', count: 1 },
      { name: 'Social Media', count: 1 },
      { name: 'Copywriting', count: 1 },
      { name: 'Video Scripts', count: 1 }
    ]
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    count: 2,
    subcategories: [
      { name: 'Visualization', count: 1 },
      { name: 'Predictive Analytics', count: 1 }
    ]
  },
  {
    id: 'education',
    name: 'Education',
    count: 2,
    subcategories: [
      { name: 'Learning Tools', count: 1 },
      { name: 'Teaching Assistants', count: 1 }
    ]
  }
];
