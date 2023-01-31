import React, { useState } from 'react';
function CounterControls({ count, setCount }) {
    const [buttonClass, setButtonClass] = useState("primary");
    // Decrement Function
    const DecrementFn = () =>{
        if(count <= 0){
            setCount(0)
            setButtonClass("secondary")
        }
        else{
            setCount(count - 1)
            setButtonClass("primary")
        }
    }

    // Increment Function
    const IncrementFn = () =>{
        setCount(count + 1)
        setButtonClass("primary")
    }

    return (
        <div className="counter-controls">
            <button onClick={DecrementFn} className={buttonClass} style={{}}>Decrement -1</button>
            <button onClick={() => setCount(0)} id="resetYellow">Reset</button>
            <button onClick={IncrementFn}>Increment +1</button>
            <p className='text my-2'style={{fontSize:"15px"}}>Done by:- Anish 12017020</p>

        </div>
    );
}

export default CounterControls;
}
