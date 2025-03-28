import React from 'react';
import { MenuItem as MenuItemType } from '@/data/menu-items';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { name, price, description, tag } = item;
  
  // Format price
  const formattedPrice = typeof price === 'number' ? `$${price.toFixed(2)}` : price;
  
  return (
    <div className="group hover:bg-gray-50 p-3 transition-all rounded-md -mx-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-vondas-grey group-hover:text-vondas-red transition-colors relative">
          {name}
          {tag && (
            <span className="absolute -top-1 left-full ml-2 text-xs bg-vondas-grey text-white px-2 py-1 rounded-md text-[10px] uppercase tracking-wider font-normal">
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </span>
          )}
        </h3>
        <span className="font-bold text-vondas-red text-xl ml-4">{formattedPrice}</span>
      </div>
      
      <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default MenuItem;
