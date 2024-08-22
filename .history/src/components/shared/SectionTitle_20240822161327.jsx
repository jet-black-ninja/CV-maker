export function SectionTitle({title}){
    return (
        <>
            <h3 className = "text-[1.3rem] font-bold uppercase">
                {title}
            </h3>
            <hr className = "h-px mt-2 mb-6 border-1 border-black"/>
        </>
    )
}
