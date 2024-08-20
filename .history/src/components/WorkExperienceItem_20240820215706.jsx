import {ListSection} from "./shared/ListSection";
import {Title} from "./shared/Title";

function WorkExperienceItem({workExperience}){
    return (
        <>
            {/* Work Experience Item */}
            <div className ="flex flex-col">
                <Title title = {workExperience.companyName} period ={workExperience.period}/>
                {/* Job Title */}
                <p className ="sub-title text-[0.8rem] mb-2">
                {workExperience.jobTitle}
                </p>
                {/* Job Description List*/}
                <ul className ="flex flex-col pl-4">
                    {workExperience.sections.map(section => {
                        
                    })}
                </ul>
            </div>
        </>
    )
}
export default WorkExperienceItem;