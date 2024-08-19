function TextAreaInput({title, placeholder ="" , id, initialValue , onChange}){
    return (
        <div>
            <label 
            htmlFor = {id}
            className = "block text-sm font-medium text-gray-700">
                {title}
            </label>
            <textarea
            rows={5}
            placeHolder={placeholder}
            id = {id}
            name = {id}
            
        </div>
    )
}