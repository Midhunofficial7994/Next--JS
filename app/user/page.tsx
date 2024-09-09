 "use client"
import React, { useState } from 'react'

const page = () => {

    const [inputValue,setInputValue] =useState<string>("")
    const [display, displayValue]= useState<string>("");

    const inputChanges =(event:React.ChangeEvent<HTMLInputElement>)=>{
       setInputValue(event.target.value);
    }

    const handleButton = () =>{
        displayValue(inputValue)
    }

  return (
    <div>
      
   <input type='text'
   value={inputValue}
    onChange={inputChanges}
   />

   <button onClick={handleButton}>Submit</button><br></br>
    {display}


      </div>
    
  )
}

export default page


