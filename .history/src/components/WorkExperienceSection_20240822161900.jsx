import {HRLine} from "./shared/HR";
import {WorkExperienceItem} from "./WorkExperienceItem";
import {SectionTitle} from "./shared/SectionTitle";

export function WorkExperienceSection({workExperiences}){
    if(!workExperiences || workExperiences.length===0)
        return null;
    return (
        <>
            {/* Work Experience */}
            <div className ="flex flex-col mb-6">
                <SectionTitle title = "Work Experience"/>
                {workExperiences.map((workExperience, index) =>(
                    <div key ={workExperiences.id}>
                        <WorkExperienceItem workExperience={workExperience}/>
                        <HRLine/>
                    </div>
                ))}
            </div>
        </>
    )
}
