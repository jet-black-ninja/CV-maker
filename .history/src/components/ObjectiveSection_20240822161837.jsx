import {DisplaySection} from "./shared/DisplaySection";

function ObjectiveSection({objective}){
    if(!objective ||!objective.description){
        return null;
    }
    return (
        <DisplaySection title="Objective" description={objective.description} />
    );
}

export ObjectiveSection;
