import { useState } from "react";
import {v4 as uuidv4 } from "uuid";
import {Icon} from "./Icon"
import {HRLine} from "./shared/HR"
import {TextInput} from "./shared/TextInput";
import {TextAreaInput} from "./shared/TextAreaInput";
import {Modal} from "./shared/Modal";

function InputWorkExperienceItem({workExperience,onSave, onRemove}){
    const [showModal, setShowModal] = useState(false);
    const [modelTitle, setModalTitle] = useState("KeyPoint");
    const [selectedSection, setSelectedSection] = useState(null);

    const onRemoveKeyPoint =(id) =>{
        workExperience.sections = workExperience.sections.filter((section) => section.id!== id);
        onSave(workExperience);
    };
    const onEditSection = (section) =>{
        setModalTitle("Edit Key Point");
        setSelectedSection(section);
        setShowModal(true);
    };

    const handleAddNewKeyPoint =() =>{
        const newSection ={
            id:uuidv4(),
            title:'',
            description:'',
            items:[], 
        };
    }
    workExperience.sections.push(newSection);
    onSave(workExperience);
    setModalTitle

}
export default InputWorkExperienceItem;