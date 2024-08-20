function PersonalInfo({personalInfo}){
    if(personalInfo){
        return null;
    }
    const fullName = personalInfo.firstName +' ' + personalInfo.lastName;
    return (
        <>
            {/* {personal information} */}
            <div className ="flex flex-col content-center justify-center text-center mb-10">
                <h2 className ="text-[2.5rem] font-bold mb-4">{fullName}</h2>
                <p className ="sub-title mb-2">{personalInfo.title}</p>
                <div className ="flex justify-center gap-6">
                    {/* {phone} */}
                    <div className ="flex justify-center content-center">
                        <svg 
                        xmlns ="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    </div>
                </div>
            </div>
        </>
    )
}