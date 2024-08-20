import { useState } from "react";
import { v4 } from "uuid";
import {Button} from "./Button"
import {InputWorkExperienceItem} from "./InputWorkExperienceItem";
import {HRline} from "./shared/HR";

function InputWorkExperience({workExperience=[], onSave}){
    const onAddNew = () =>{
        const newItems =[...workExperience];
        newItems.push({
            id: uuid.v4(),
            companyName:'',
            workPeriond:'',
            jobTitle:'',
            sections:[],
        });
        onSave(newItems);
    };
    const handleChangeWorkExperience =(value) =>{
        const newItems = workExperience.map((item)=>item.id === value.id ? value : item);
        
    
    }

}
export default InputWorkExperience;