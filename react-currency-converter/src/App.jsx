import { useState } from 'react'
import './App.css'
import InputBox from './component/InputBox'
import useCurrencyDetail from './hook/useCurrencyDetail';

function App() {

  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr") 
  const [errMessage, setErrMessage] = useState() 

  const currencyInfo = useCurrencyDetail(from)
  
  const convert = () => {
    if(amount == 0) {
      setErrMessage("* amount zero")
    }
    else {
      setErrMessage("")
      setConvertedAmount(amount * currencyInfo[to])
    }
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }


  return (  
    <>
    <div className='flex flex-col justify-center items-center border-2 border-solid border-[#FF9D23] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5'>
      <h1 className='text-center font-bold text-3xl mb-8 uppercase text-[#FF9D23]'>Currency Converter</h1>
      <InputBox
        amount={amount} 
        labeln="From"
        isAmountDisabled={false}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectedCurrency={from}
      />
      <button 
        onClick={() => swap()}
        className='p-1 border-solid border-2 border-[#FF9D23] w-full my-3 text-[#FF9D23] ease-in-out duration-300 flex justify-center
        hover:bg-[#ff9c233a]'
      ><span className="material-symbols-outlined pr-2">swap_vert</span>
      Swap</button> 
      <InputBox   
        amount={convertedAmount} 
        labeln="To"
        isAmountDisabled={true}
        onCurrencyChange={(currency) => setTo(currency)}
        selectedCurrency={to}
      />
      <button 
        className='p-2 bg-[#FF9D23] w-full mt-8 text-white font-bold hover:bg-[#ff9c23de]'
        onClick={() => convert()}
      >Convert</button>
      <p className='p-1 w-full text-xs text-left text-red-600 mb-8'>{errMessage}</p>
    </div>  
      
    </>
  )
}

export default App
