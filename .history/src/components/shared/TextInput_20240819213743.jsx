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
            placeholder = {placeholder}
            onChange = {(e) => onChange(e.target.value)}
            className = "mt-1 p-2 w-full border rounded-md"/>
        </div>
    );
}
