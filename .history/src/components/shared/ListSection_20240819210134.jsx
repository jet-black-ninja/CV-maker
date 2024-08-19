function ListSection({title, description , items}){
    return (
        
            <div className = "mb-2 ">
                <p className = "sub-title "><span className = "font-bold">{title}:</span>{description}</p>
                {
                    <ul className = "list-disc list-inside pl-4">
                        {items ? items.map((item, index) => (
                            <li key={index}>{item}</li>
                        )): null
                        }
                    </ul>
                } 
            </div>
    );
}