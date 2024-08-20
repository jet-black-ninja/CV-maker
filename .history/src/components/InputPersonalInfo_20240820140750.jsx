import {TextInput} from "./shared/TextInput";

function InputPersonalInfo({inputInfo, onSave}){
    return (
        <div className = "my-4 p-4 shadow-md rounded-md">
            <div className = "flex flex-col">
                <div className ="grid grid-cols-2 gap-4 mb-4">
                    {/* First Name */}
                    <TextInput title = "First Name" id = "firstName" initialValue ={inputInfo.firstName}
                    placeholder ="John"
                    onChange ={(value) => onSave({...inputInfo, firstName:value})}/>
                    {/* Last Name */}
                    <TextInput title = "Last Name" id = "lastName" initialValue ={inputInfo.lastName}
                    placeholder ="BloodBorne"
                    onChange ={(value) => onSave({...inputInfo, lastName:value})}/>
                </div>
                <div className = "mb-4">
                    {/* Title */}
                    <TextInput title ="Title" id = "title" initialValue = {inputInfo.title}
                    placeholder ="Title"
                    onChange ={(value) => onSave({...inputInfo, title:value})}/>
                </div>
            </div>
        </div>
    )
}
export default InputPersonalInfo;