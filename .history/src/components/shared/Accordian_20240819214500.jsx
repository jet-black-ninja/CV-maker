import { useState } from "react";

function Accordian({title, expanded = false , children}){
    const [inExpanded , setExpanded]=useState(expanded);

    let className = "transition-all "
}