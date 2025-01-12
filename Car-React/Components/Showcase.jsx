import Navbar from './Navbar';
import { useState } from 'react';
import "../src/style.css";

function Showcase() {
    const [count, setCount] = useState('');

    return(
        <>
            <div className='showcase'>
                <Navbar />
                <div className='showcase-content'>
                    $290/mo Leasing
                    <div className='buttons'>
                        <a href="#" onClick={() => setCount("Order Confirmed 3")} className='p-2'>Order Model 3</a>
                        <a href="#" onClick={() => setCount("Order Confirmed Y")}>Order Model Y</a>
                    </div>
                    {count}
                </div>
            </div>  
        </>
    );
}

export default Showcase;
