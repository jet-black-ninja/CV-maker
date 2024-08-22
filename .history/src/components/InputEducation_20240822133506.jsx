\import { v4 as uuidv4} from "uuid";
import {Button } from "./Button"
import {InputEducationItem} from "./InputEducationItem"
import {HRLine} from "./shared/HR"

export function InputEducations({ educations = [], onSave }) {
    const onAddNew = () => {
      const newItems = [...educations];
      newItems.push({
        id: uuidv4(),
        title: '',
        period: '',
        subTitle: '',
        sections: []
      });
  
      onSave(newItems);
    };
  
    const handleChangeItem = (value) => {
      const newItems = educations.map((item) => item.id === value.id ? value : item);
      onSave(newItems);
    };
  
    const handleRemoveItem = (id) => {
      const newItems = educations.filter((item) => item.id !== id);
      onSave(newItems);
    };
  
    return (
      <>
        <div className="p-4 pt-0 shadow-md rounded-md">
          <div className="flex flex-col">
            {educations.map((item) => (
              <div className="mb-4" key={item.id}>
                <InputEducationItem education={item} onSave={handleChangeItem} onRemove={handleRemoveItem}/>
                <HRLine />
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
  