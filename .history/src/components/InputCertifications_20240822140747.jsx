import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./Button";
import { InputCertificationItem } from "./InputCertificationItem";
import {HRLine } from "./shared/GrayHRLine";

export function InputCertifications({ certifications = [], onSave }) {
  const onAddNew = () => {
    const newItems = [...certifications];
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
    const newItems = certifications.map((item) => item.id === value.id ? value : item);
    onSave(newItems);
  };

  const handleRemoveItem = (id) => {
    const newItems = certifications.filter((item) => item.id !== id);
    onSave(newItems);
  };

  return (
    <>
      <div className="p-4 pt-0 shadow-md rounded-md">
        <div className="flex flex-col">
          {certifications.map((item) => (
            <div className="mb-4" key={item.id}>
              <InputCertificationItem certification={item} onSave={handleChangeItem} onRemove={handleRemoveItem}/>
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

