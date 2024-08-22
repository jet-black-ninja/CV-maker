import { useState } from "react";
import {v4 as uuidv4} from "uuid"
import {Button} from "./Button"
import {InputAwardItem} from "./InputAwardItem"
import {HRLine} from "./shared/HR"

export function InputAwards({ awards = [], onSave }) {
    const onAddNew = () => {
      const newItems = [...awards];
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
      const newItems = awards.map((item) => item.id === value.id ? value : item);
      onSave(newItems);
    };
  
    const handleRemoveItem = (id) => {
      const newItems = awards.filter((item) => item.id !== id);
      onSave(newItems);
    };
  
    return (
      <>
        <div className="p-4 pt-0 shadow-md rounded-md">
          <div className="flex flex-col">
            {awards.map((item) => (
              <div className="mb-4" key={item.id}>
                <InputAwardItem award={item} onSave={handleChangeItem} onRemove={handleRemoveItem}/>
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