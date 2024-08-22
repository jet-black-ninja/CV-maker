import { useState } from "react";
import { v4 } from "uuid";
import {Icon} from "./Icon";
import {HRLine} from "./shared/HR";
import {TextInput} from "./shared/TextInput";
import {TextAreaInput} from "./shared/TextAreaInput";
import {Modal} from "./shared/Modal";

export function InputProjectItem({project,onSave,onRemove}){
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
                                <label htmlFor = {project.id+"-keyPoints"} className = "flex items-center text-sm font-medium text-gray-700 mb-2">
                                    <p className="mb-2" > Rows </p>
                                    {/* Add Key Points Button */}
                                    <button className = "hover:text-green-700" onClick = {handleAddNewKeyPoint}>
                                        <Icon iconType = "add" size = "size-5"/>
                                    </button>
                                </label>
                                {/* Bullet Points  point item */}
                                {
                                    project.sections &&
                                    project.sections.map((section) => (
                                        <div key={section.id} className = "p-2">
                                            <div className = "flex justify-between">
                                                <p> {section.title}</p>
                                                <div className = "flex gap-4">
                                                    <button className = "text-gray-700 hover:text-blue-700 " onClick = {() => {onEditSection(section)}}>
                                                        <Icon iconType = "edit" size = "size-5"/>
                                                    </button>
                                                    <button className = "text-gray-700  hover:text-red-700 " onClick ={() => {onRemoveKeyPoint(section)}}>
                                                        <Icon iconType = "clear" size = "size-5"/> 
                                                    </button>
                                                </div>
                                            </div>
                                            <HRLine/>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            {
                selectedSection && 
                <Modal show={showModal} title = {modalTitle}>
                <div className="overflow-auto max-h-500 relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans font-light flex flex-col gap-2">
              { /* Title */}
              <TextInput
                title="Title"
                id={selectedSection.id + "-title"}
                initialValue={selectedSection.title}
                onChange={(value) => setSelectedSection({ ...selectedSection, title: value })} />

              { /* Description */}
              <TextAreaInput
                title="Description"
                placeholder="Input key point description..."
                id={selectedSection.id + "-description"}
                initialValue={selectedSection.description}
                onChange={(value) => setSelectedSection({ ...selectedSection, description: value })} />

              { /* Items */}
              <div className="flex flex-col gap-2 mb-2">
                {
                  selectedSection.items &&
                  selectedSection.items.map((item, index) => (
                    <div key={index}>
                      <label
                        htmlFor={index}
                        className="block text-sm font-medium text-gray-700">
                        <p>Key point {index + 1}</p>
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          id={index}
                          name={index}
                          value={item}
                          onChange={(e) => onChangeItem(index, e.target.value)}
                          className="mt-1 p-2 w-full border rounded-md" />
                        <button className="text-red-500" onClick={() => { onRemoveItem(index) }}>
                          <Icon iconType="x" size="size-6" />
                        </button>
                      </div>
                    </div>
                  ))
                }
              </div>

              <button className="text-green-500 flex justify-center gap-2" onClick={() => { onAddItem() }}>
                <Icon iconType="add" size="size-5" />
                <p>Add new key point</p>
              </button>


            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
              { /* Cancel edit */}
              <button className="middle none center mr-1 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => { setShowModal(false) }}>
                Cancel
              </button>

              { /* Confirm edit */}
              <button className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => handleOnSaveSection(selectedSection)} >
                Confirm
              </button>

            </div>
                </Modal>
            }
            </div>
        </>
    )
}


