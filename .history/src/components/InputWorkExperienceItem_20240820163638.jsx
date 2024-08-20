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
    
    workExperience.sections.push(newSection);
    onSave(workExperience);
    setModalTitle("Add Key Point");
    setSelectedSection(newSection);
    setShowModal(true);
    };

    const handleOnSaveSection =(section) =>{
        if(section.id){
            const updatedSections = workExperience.sections.map((item) => {
                if(item.id === section.id){
                    return section;
                }
                return item;
            });
            onSave({...workExperience, sections : updatedSections});
            setShowModal(false);
        }
    };

    const onRemoveItem = (index) =>{
        selectedSection = selectedSection.items.filter((_, i) => i !== index);
        setSelectedSection({...selectedSection});
    }
    const addItem = () => {
        if(!selectedSection.items){
            selectedSection.items =[];
        }
        selectedSection.items.push("");
        setSelectedSection({...selectedSection});
    }
    const onChangeItem = (index,value) => {
        selectedSection.items[index] = value;
        setSelectedSection({...selectedSection});
    }

    return (
        <>
            <div className = "relative max-w">
                <button className="absolute  top-0 -ml-3.5 h-8 w-8 rounded-full bg-white text-red-500 border-2 hover:border-red-500 flex justify-center items-center"
                onClick={() => {onRemove(workExperience.id);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className = "mt-"
            </div>
        </>
    );
}
export default InputWorkExperienceItem;