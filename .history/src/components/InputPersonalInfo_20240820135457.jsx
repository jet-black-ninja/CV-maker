import {TextInput} from "./shared/TextInput";

function InputPersonalInfo({inputInfo, onSave}){
    return (
        <div className = "my-4 p-4 shadow-md rounded-md">
            <div className = "flex flex-col">
                <div className ="grid grid-cols-2 gap-4 mb-4">
                    {/* First Name */}
                    <TextInput title = "First Name" id = "firstName" initialValue ={inputInfo.firstName}
                </div>
            </div>
        </div>
    )
}