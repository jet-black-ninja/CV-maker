import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./Button";
import { InputSkillItem } from "./InputSkillItem";
import { HRLine } from "./shared/HRLine";

export function InputSkills({ skills = [], onSave }) {
  const onAddNew = () => {
    const newItems = [...skills];
    newItems.push({
      id: uuidv4(),
      title: '',
      issuer: '',
      description: '',
      issuedDate: '',
      sections: []
    });

    onSave(newItems);
  };

  const handleChangeItem = (value) => {
    const newItems = skills.map((item) => item.id === value.id ? value : item);
    onSave(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = skills.filter((item) => item.id !== id);
    onSave(newItems);
  };

  return (
    <>
      <div className="p-4 pt-0 shadow-md rounded-md">
        <div className="flex flex-col">
          {skills.map((item) => (
            <div className="mb-4" key={item.id}>
              <InputSkillItem skill={item} onSave={handleChangeItem} onRemove={handleRemoveItem}/>
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

