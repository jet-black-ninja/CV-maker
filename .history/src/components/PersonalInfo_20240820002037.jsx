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
                        full = "currentColor"
                        className ="size-4 mr-2"
                        >
                            <path
                            fillRule="evenodd"
                            d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                            clipRule="evenodd" />
                        </svg>
                        <p>{personalInfo.phone}</p>
                    </div>
                    {/* {email} */}
                    
                </div>
            </div>
        </>
    )
}