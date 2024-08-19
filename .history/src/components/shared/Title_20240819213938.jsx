function Title({title , period}){
    return (
        <>
            <div className = "flex justify-between text-[1.1rem]"></div>
            <p className = "sub-title font-bold">{title}</p>
            <p className = "sub-title"> {period}</p>
        </>
    )
}