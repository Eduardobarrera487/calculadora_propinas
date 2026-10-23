import type { Dispatch, SetStateAction } from "react";
//opciones de propina
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
};

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
        <h2 className="text-xl font-bold text-gray-800 text-center">Propina</h2>

        <form>
            {tipOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name="tip"
                        id={option.id}
                        value={option.value}
                        onChange={() => setTip(option.value)}
                        checked={option.value === tip}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            ))}
           
        </form>
    </div>
  )
}
