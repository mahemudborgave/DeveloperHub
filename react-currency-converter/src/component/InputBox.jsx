import { useId } from "react";
import useCurrencyDetail from "../hook/useCurrencyDetail";

function InputBox(
    {
        amount,
        labeln,
        isAmountDisabled,
        onAmountChange,
        onCurrencyChange,
        selectedCurrency,
    }
) 
{
    let labelID = useId();
    let data = useCurrencyDetail("usd");
    let countryCodes = Object.keys(data);
    // console.log(countryCodes);
    
    return (
        <div className="flex justify-around w-[400px] m-auto p-3 bg-[#0189CD]">
            <div className="flex flex-col">
                <label htmlFor={labelID} className="mb-1">{labeln}</label>
                <input  
                id={labelID} 
                type="text" 
                placeholder="" 
                size="15" 
                value={amount}
                className="p-1 text-sm border-none outline-none"
                disabled={isAmountDisabled}
                onChange={(e) =>  onAmountChange &&  onAmountChange((e.target.value))}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="mb-1">Currency Type</label>
                <select name="" id="" 
                    className="p-1 outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {countryCodes.map((codes) => (
                        <option key={codes} value={codes}>{codes}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;