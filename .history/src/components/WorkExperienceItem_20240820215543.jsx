import {ListSection} from "./shared/ListSection";
import {Title} from "./shared/Title";

function WorkExperienceItem({workExperience}){
    return (
        <>
            {/* Work Experience Item */}
            <div className ="flex flex-col">
                <Title title = {workExperience.companyName} period ={workExperience.period}
            </div>
        </>
    )
}
export default WorkExperienceItem;