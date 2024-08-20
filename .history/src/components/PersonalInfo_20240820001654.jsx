function PersonalInfo({personalInfo}){
    if(personalInfo){
        return null;
    }
    const fullName = personalInfo.firstName +' ' + personalInfo.lastName;
    return (
        <>
            {/* personal information */}
            <div className ="flex flex-col content-center justify-center text-center mb-10">
                <h2 className ="text-[2.5rem] font-bold mb-4"
            </div>
        </>
    )
}