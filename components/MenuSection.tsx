import React from 'react';
import MenuCategory from './MenuCategory';
import { MenuSection as MenuSectionType } from '@/data/menu-items';

interface MenuSectionProps {
  section: MenuSectionType;
  isActive: boolean;
  id: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ section, isActive, id }) => {
  const { title, description, categories } = section;
  
  // Check if category is "DRINKS" to display it at the bottom spanning full width
  const regularCategories = categories.filter(cat => cat.title !== "DRINKS");
  const drinksCategory = categories.find(cat => cat.title === "DRINKS");
  
  return (
    <div
      id={id}
      className={`transition-opacity duration-300 ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-vondas-red mb-4 pb-2 border-b-2 border-vondas-grey inline-block">{title}</h2>
        {description && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
      
      {/* Main menu categories in 1 column */}
      <div className="flex flex-col gap-12 mb-12 max-w-3xl mx-auto">
        {regularCategories.map((category, index) => (
          <div 
            key={index}
            id={`category-${id.split('-').pop()}-${index}`}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 scroll-mt-32 w-full"
          >
            <MenuCategory category={category} />
          </div>
        ))}
      </div>
      
      {/* Drinks category at the bottom, full width */}
      {drinksCategory && (
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-vondas-red mb-6 text-center border-b-2 border-vondas-grey pb-2 inline-block">
              {drinksCategory.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drinksCategory.items.map((item, idx) => (
                <div key={idx} className="flex justify-between border-b border-gray-200 pb-2 group hover:bg-white hover:px-3 transition-all rounded">
                  <span className="font-medium group-hover:text-vondas-red transition-colors">{item.name}</span>
                  <span className="text-vondas-red">${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuSection;
