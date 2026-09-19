import type { MenuItem } from '../types';
type MenuItemProps = {
  item: MenuItem;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <button className="w-full bg-white border border-teal-300 rounded-lg shadow-md p-4 flex justify-between items-center hover:bg-teal-100 transition-colors">
        <h2 className="text-md font-bold text-gray-800 ">{item.name}</h2>
        <p className="text-md font-bold text-teal-500">${item.price.toFixed(2)}</p>
    </button>
  )
}
