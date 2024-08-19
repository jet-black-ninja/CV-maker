import { useState } from "react";

function Accordian({title, expanded = false , children}){
    const [inExpanded , setisExpanded]=useState(expanded);

    let className = "transition-all duration-300 ease-in-out"
    className += !isExpanded ? 
}