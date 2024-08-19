function Modal({title="Model", show, children}){
    if(!show){
        return null;
    }
    return (
        <>
            <div className = show ? "fixed inset-0 z-[99] gird h-screen w-screen place-itmes"
        </>
    )
}