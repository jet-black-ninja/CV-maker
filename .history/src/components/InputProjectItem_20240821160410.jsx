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
    }
}
export default InputProjectItem;

