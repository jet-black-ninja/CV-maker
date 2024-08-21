import { useState } from "react";
import { v4 } from "uuid";
import {Icon} from "./Icon";
import {HRLine} from "./shared/HR";
import {TextInput} from "./shared/TextInput";
import {TextAreaInput} from "./shared/TextAreaInput";
import {Modal} from "./shared/Modal";

function InputProjectItem({project,onSave,onRemove}){
    const [showModal, setShowModal]= useState(false);
    const [modalTitle , setModalTitle]= useState("Key Point")
    const [selectedSection, setSelectedSection]= useState(null);

    const onRemoveKeyPoint = (id) => {
        project.sections = project.sections.filter((section) => section.id!== id);
        onSave(project);
    };
    const onEditSection = (section) => {
        setModalTitle("Edit Key Point");
        setSelectedSection(section);
        setShowModal(true);
    };
    const handleAddNewKeyPoint = () => {
        const newSection = {
            id : uuidv4(),
            title: '',
            description:'',
            items:[],
        };
        project.sections.push(newSection);
        onSave(project);
        setModalTitle("Add Key Point");
        setSelectedSection(newSection);
        setShowModal(true);
    }

    const handleOnSaveSection = (section) => {
        if(section.id){
            const updatedSections = project.sections.map((item) =>{
                if(item.id === section.id){
                    return section;
                }
                return item;
            });

            onSave({...project, sections:updatedSections});
            setShowModal(false);
        }
    }

    const onRemoveItem = (index) => {
        selectedSection.items = selectedSection.items.filter((_,i) => i !== index);
        setSelectedSection({...selectedSection});
    };
    const onAddItem = () => {
        if(!selectedSection.items){
            selectedSection.items = []
        }
        selectedSection.items.push('');
        setSelectedSection({...selectedSection});
    }
    const onChangeItem =(index, value ) => {
        selectedSection.items[index]= value;
        setSelectedSection({...selectedSection});
    }

    return (
        <>
            <div className = "relative max-w">
                <button className = "absolute top-0 -ml-3.5 h-8 w-8 rounded-full bg-white text-red-500 border-2 hover:border-red-500 flex justify-center items-center"
                onClick ={() =>{onRemove(project.id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className = "mt-6 border-l-4 border-dotted px-4">
                    <div className ="my-4 px-4">
                        <div className = "flex flex-col">
                            <div className = "w-full mb-4">
                                {/* Project Name */}
                                <TextInput title = "Project Name" id={project.id+"-project-name"} initialValue={project.name}
                                placeholder = "Input Project Name..."
                                onChange ={(value) => onSave({...project, name:value})}/>
                            </div>
                            <div className = "w-full mb-4">
                                {/* Period */}
                                <TextInput title ="Period" id = {project.id +"-period"} initialValue = {project.period}
                                placeholder = "Input project period..." onChange ={(value) => onSave({...project, period:value})}/>
                            </div>
                            <div className ="w-full mb-4">
                                {/* Key Points */}
                                <label htmlFor = ""
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InputProjectItem;

