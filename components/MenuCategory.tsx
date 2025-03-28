import React from 'react';
import MenuItem from './MenuItem';
import { MenuCategory as MenuCategoryType } from '@/data/menu-items';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  const { title, items } = category;
  
  return (
    <div className="mb-6 last:mb-0">
      <div className="relative text-center mb-8">
        <h2 className="text-2xl font-bold text-vondas-grey relative inline-block pb-2">
          {title}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-vondas-red rounded"></span>
        </h2>
      </div>
      
      <div className="space-y-6 divide-y divide-gray-100">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`pt-6 ${index > 0 ? 'mt-6' : ''}`}
          >
            <MenuItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
