// Code EyesOnMe Component Here
import React from "react";
function EyesOnMe(){
    const handleBlur=(event)=>{
        console.log("Hey! Eyes on me!")
    }
    const handleFocus=()=>{
        console.log("Good!")
    }
    return(
         <div>
            <button onBlur={handleBlur}onFocus={handleFocus}>
                Eyes on me
            </button>
         </div>
    )
    
} 
export default EyesOnMe;
