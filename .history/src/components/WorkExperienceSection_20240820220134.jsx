import {HRline} from "./shared/HR";
import {WorkExperienceItem} from "./WorkExperienceItem";
import {SectionTitle} from "./shared/SectionTitle";

function WorkExperienceSection({workExperiences}){
    if(!workExperiences || workExperiences.length===0)
        return null;
    return (
        <>
            {/* Work Experience */}
            <div className ="flex flex-col mb-6">
                <SectionTitle title = "Work Experience"/>
                {workExperiences.map(workExperience, index ) =>)
                }
            </div>
        </>
    )
}
export default WorkExperienceSection;