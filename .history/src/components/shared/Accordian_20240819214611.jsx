import { useState } from "react";

function Accordian({title, expanded = false , children}){
    const [inExpanded , setIsExpanded]=useState(expanded);

    let className = "transition-all duration-300 ease-in-out"
    className += !isExpanded ? "h-0 overflow-hidden": "h-full";
    let svgClassName = "size-6 absolute-"
}