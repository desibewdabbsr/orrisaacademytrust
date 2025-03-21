import { useState } from 'react';
import SectionTitle from '@/components/common/SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { galleryImages } from '@/lib/data';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

// Additional images for the expanded gallery
const expandedGallery = [
  ...galleryImages,
  {
    id: 9,
    category: "events",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Annual Day celebration"
  },
  {
    id: 10,
    category: "activities",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Music lesson"
  },
  {
    id: 11,
    category: "campus",
    image: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Computer lab"
  },
  {
    id: 12,
    category: "events",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Independence Day celebration"
  },
  {
    id: 13,
    category: "activities",
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Yoga class"
  },
  {
    id: 14,
    category: "campus",
    image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c198?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "School garden"
  },
  {
    id: 15,
    category: "events",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Science exhibition"
  },
  {
    id: 16,
    category: "activities",
    image: "https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    alt: "Art and craft session"
  }
];

const GalleryImage = ({ image }: { image: typeof expandedGallery[0] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="gallery-item overflow-hidden rounded-lg shadow-md cursor-pointer">
          <div className="block relative h-0 pb-[75%] overflow-hidden">
            <img 
              src={image.image} 
              alt={image.alt} 
              className="absolute inset-0 h-full w-full object-cover transform hover:scale-110 transition-transform duration-500" 
            />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={image.image} 
            alt={image.alt} 
            className="w-full h-full object-contain" 
          />
        </div>
        <p className="text-center text-gray-700 mt-2">{image.alt}</p>
      </DialogContent>
    </Dialog>
  );
};

const Gallery = () => {
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  
  const filteredGalleryImages = activeGalleryTab === 'all' 
    ? expandedGallery 
    : expandedGallery.filter(img => img.category === activeGalleryTab);

  const galleryCategories = [
    { id: 'all', label: 'All' },
    { id: 'campus', label: 'Campus' },
    { id: 'events', label: 'Events' },
    { id: 'activities', label: 'Activities' }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Gallery"
          subtitle="Glimpses of our educational initiatives, events, and community activities."
        />

        <div className="mt-8 text-center">
          <Tabs defaultValue="all" onValueChange={setActiveGalleryTab}>
            <TabsList className="inline-flex rounded-md">
              {galleryCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGalleryImages.map((image) => (
            <GalleryImage key={image.id} image={image} />
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="prose prose-blue max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 font-['Merriweather']">About Our Gallery</h3>
            <p>
              Our gallery showcases the vibrant life at Orrisa Academy Trust. These images capture the 
              essence of our educational philosophy – a blend of academic rigor, cultural enrichment, 
              and personal development.
            </p>
            <p>
              From classroom activities to cultural celebrations, from sports events to community 
              outreach programs, these photographs tell the story of our journey in nurturing young 
              minds and building a stronger community.
            </p>
            <p>
              We regularly update our gallery with new photographs from recent events and activities. 
              If you'd like to contribute photographs of Orrisa Academy Trust events you've attended, 
              please contact our administration office.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
