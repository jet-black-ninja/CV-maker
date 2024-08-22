import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./Button";
import { InputWorkExperienceItem } from "./InputWorkExperienceItem";
import { HRLine } from "./shared/HRLine";

export function InputWorkExperiences({ workExperiences = [], onSave }) {
  const onAddNew = () => {
    const newItems = [...workExperiences];
    newItems.push({
      id: uuidv4(),
      companyName: '',
      workPeriod: '',
      jobTitle: '',
      sections: []
    });

    onSave(newItems);
  };

  const handleChangeWorkExperience = (value) => {
    const newItems = workExperiences.map((item) => item.id === value.id ? value : item);
    onSave(newItems);
  };

  const handleRemoveWorkExperience = (id) => {
    const newItems = workExperiences.filter((item) => item.id !== id);
    onSave(newItems);
  };

  return (
    <>
      <div className="p-4 pt-0 shadow-md rounded-md">
        <div className="flex flex-col">
          {workExperiences.map((item) => (
            <div className="mb-4" key={item.id}>
              <InputWorkExperienceItem workExperience={item} onSave={handleChangeWorkExperience} onRemove={handleRemoveWorkExperience}/>
              <GrayHRLine />
            </div>
          ))}

          <div className="self-center w-1/3">
            <Button title="Add" icon="add" onClick={onAddNew} />
          </div>
        </div>
      </div>
    </>
  );
}
