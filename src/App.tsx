import MenuItem from "./components/MenuItem.tsx";
import OrderContents from "./components/OrderContents.tsx";
import OrderTotal from "./components/OrderTotal.tsx";
import TipPercentageForm from "./components/TipPercentageForm.tsx";
import { menuItems } from "./data/db.ts";
import useOrder  from "./hooks/useOrder.ts";
function App() {
 
  const {order, addItem, removeItem, tip, setTip, clearOrder} = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5 ">
        <h1 className="text-2xl font-bold text-white text-center">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="container mx-auto mt-20 grid md:grid-cols-2 gap-4">
          
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800">Menu</h2>
          
          <div className = "space-y-4 mt-10">
            {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
            />
          ))}
          <button className="w-full bg-teal-400 text-white rounded-lg shadow-md p-4 flex justify-center items-center hover:bg-teal-500 transition-colors">
            Calcular Consumo
          </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 space-y-10">
          <OrderContents
            order={order}
            removeItem={removeItem}
          />
          <TipPercentageForm
            setTip={setTip}
            tip={tip}
          />
          <OrderTotal
          order={order}
          tip={tip}
          clearOrder={clearOrder}
           />
        </div>
      </main>
    </>
  )
}

export default App
