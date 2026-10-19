import React from "react";
import type { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderContentsProps = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id']) => void
};

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 text-center">Order Contents</h2>

      <div className="space-y-4 mt-10">
        {order.length === 0 ? (
          <p className="text-gray-600 text-center">No items in the order.</p>
        ) : (
          order.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white border border-teal-400 p-4 rounded-lg shadow-md">
              <div>
                <p className="text-gray-800 font-semibold">{item.name} - {formatCurrency(item.price)}</p>
                <p className="text-gray-600">Quantity: {item.quantity} - Total: {formatCurrency(item.price * item.quantity)}</p>
                </div>
              <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600"
              onClick={() => removeItem(item.id)}
              >X</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}