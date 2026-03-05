import React, { useRef, useState } from 'react'

const Dummy = () => {
    const inputValue = useRef();
    const [value, setValue] = useState("");
        const [value1, setValue1] = useState("");



  const handleClick = () => {
    // setValue(inputValue.current.value);
    let vari=document.getElementById("namma").value;
    console.log(vari); 
  }
  return (
    <div>
        {console.log(value)}
                {console.log(value1)}

        {/* <input type="text"  ref={inputValue} />
        <button onClick={handleClick}>click</button> */}
        <input  id='namma' type="text" />
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Dummy