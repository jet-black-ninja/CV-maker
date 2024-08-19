import { useState } from "react";

function Accordian({title, expanded = false , children}){
    const [isExpanded , setIsExpanded]=useState(expanded);

    let className = "transition-all duration-300 ease-in-out";
    className += !isExpanded ? " h-0 overflow-hidden" : " h-full";

    let svgClassName = "size-6 absolute right-0 pt-1 transition-transform";
    svgClassName += !isExpanded ? " rotate-180" : "";

    const handleExpand = () => {
    setIsExpanded(!isExpanded);
    };

    return (
        <div className = "relative px-4">
            <h6 className="mb-0">
                <button className ="relative flex items-center"
            </h6>
        </div>
    )
}