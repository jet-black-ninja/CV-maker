import {TextAreaInput} from "./shared/TextAreaInput";
function InputObjective({objective={description:""}, onSave}){
    return (
        <div className ="my-4 p-4 shadow-md rounded-md">
            <div className ="flex flex-col">
                {/* Objective Description */}
                <div className ="mb-4">
                    <TextAreaInput title ="Description" 
                </div>
            </div>
        </div>
    )

}
export default InputObjective;