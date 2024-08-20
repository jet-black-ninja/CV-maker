import {DisplaySection} from "./shared/DisplaySection";

function ObjectiveSection({objective}){
    if(!objective ||!objective.description){
        return null;
    }
    return (
        <DisplaySection 
    );
}

export default ObjectiveSection;
