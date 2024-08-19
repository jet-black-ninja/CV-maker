function ListSection({title, description , items}){
    return (
        <>
            <div className = "mb-2 ">
                <p className = "sub-title "><span className = "font-bold">{title}:</span>{description}</
                    
                </p> 
            </div>
        </>
    )
}