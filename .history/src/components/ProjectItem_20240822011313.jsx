import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./Button";
import { InputProjectItem } from "./InputProjectItem";
import { GrayHRLine } from "./shared/GrayHRLine";

export function InputProjects ({ projects = [], onSave }) {
  const onAddNew = () => {
    const newItems = [...projects];
    newItems.push({
      id: uuidv4(),
      name: '',
      period: '',
      sections: []
    });

    onSave(newItems);
  };

  const handleChangeItem = (value) => {
    const newItems = projects.map((item) => item.id === value.id ? value : item);
    onSave(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = projects.filter((item) => item.id !== id);
    onSave(newItems);
  };

  return (
    <>
      <div className="p-4 pt-0 shadow-md rounded-md">
        <div className="flex flex-col">
          {projects.map((item) => (
            <div className="mb-4" key={item.id}>
              <InputProjectItem project={item} onSave={handleChangeItem} onRemove={handleRemoveItem}/>
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
