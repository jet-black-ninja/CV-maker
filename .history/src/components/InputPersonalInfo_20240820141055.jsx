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
                    placeholder ="Hunter"
                    onChange ={(value) => onSave({...inputInfo, title:value})}/>
                </div>
                <div className = "mb-4">
                    {/* Phone */}
                    <TextInput title ="Phone" id = "phone" initialValue = {inputInfo.phone}
                    placeholder ="012-345-6789"
                    onChange ={(value) => onSave({...inputInfo, phone:value})}/>
                </div>
                <div className = "mb-4">
                    {/* Email */}
                    <TextInput title ="Email" id = "email" initialValue = {inputInfo.email}
                    placeholder ="john.BB@fromsoft.com"
                    onChange ={(value) => onSave({...inputInfo, email:value})}/>
                </div>
                <div className = "mb-4">
                    {/* Address */}
                    <TextInput title ="Address" id = "address" initialValue = {inputInfo.address}
                    placeholder ="123 Main St, Yarhnam, England"
                    onChange ={(value) => onSave({...inputInfo, address:value})}/>
                </div>
                
            </div>
        </div>
    )
}
export default InputPersonalInfo;