import {HRline} from "./shared/HR";
import {WorkExperienceItem} from "./WorkExperienceItem";
import {SectionTitle} from "./shared/SectionTitle";

function WorkExperienceSection({workExperiences}){
    if(!workExperience || workExperience.length===0)
        return null;
    return (
        <>
            {/* Work Experience */}
            <div className ="flex flex-col mb-6">
                <SectionTitle title = "Work Experience"/>
                {workExperience.map(workExperience)}
            </div>
        </>
    )
}
export default WorkExperienceSection;