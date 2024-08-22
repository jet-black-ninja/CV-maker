import {TextInput} from "./shared/TextInput"
import {TextAreaInput} from "./shared/TextAreaInput"

function InputAwardItem({award, onSave, onRemove}){
    return (
        <>
            <div className ="relative max-w">
                <button className ="absolute  top-0 -ml-3.5 h-8 w-8 rounded-full bg-white text-red-500 border-2 hover:border-red-500 flex justify-center items-center "
                onClick={() => {onRemove()}}>

                </button>
            </div>
        </>
    )

}
export default InputAwardItem;