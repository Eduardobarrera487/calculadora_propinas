import type { OrderItem } from "../types";
import { useMemo } from "react";
type OrderTotalProps = {
  order: OrderItem[]
};

export default function OrderTotal({ order }: OrderTotalProps) {
    
    const subtotalAmount = useMemo(() => {
        return order.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [order]);
    return (
   <>
        <div className= "space-y-3">
            <h2 className="text-xl font-bold text-gray-800 text-center">Totales y propina</h2>
            <p>Subtotal a pagar:
                <span className="font-bold text-gray-800"> ${subtotalAmount.toFixed(2)}</span>
            </p>
            <p>Propina:
                <span className="font-bold text-gray-800"> $0.00</span>
            </p>
            <p>Total a pagar:
                <span className="font-bold text-gray-800"> $0.00</span>
            </p>
        </div>

        <button className="w-full bg-teal-400 text-white rounded-lg shadow-md p-4 flex justify-center items-center hover:bg-teal-500 transition-colors">
        Calcular Consumo
        </button>
   </>
  )
}
