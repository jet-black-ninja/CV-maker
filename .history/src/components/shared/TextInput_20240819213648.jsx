function TextInput({title, id , placeholder, initialValue ,onChange}) {
    return (
        <div>
            <label
            htmlFor={id}
            className = "block text-sm font-medium text-gray-700">
                {title}
            </label>
            <input 
            type = "text"
            id = {id}
            name = {id}
            value = {initialValue}
            
        </div>
    )
}