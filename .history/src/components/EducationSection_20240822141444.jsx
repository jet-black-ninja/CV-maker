import { HRLine } from "./shared/HR";
import { SectionTitle } from "./shared/SectionTitle";
import { EducationItem } from "./EducationItem";

export function EducationSection({ educations }) {
    if (!educations || educations.length === 0) {
      return null;
    }

    return (
        <>
            {/* Education*/}
            <div className="flex flex-col mb-6">
                <SectionTitle title="Educations" />
                {
                  educations.map((education, index) => (
                    <div key={education.id}>
                        <EducationItem education={education} />
                        <HRLine />
                    </div>
                  ))
                }
            </div>
            {/*End Education*/}
        </>
    );
}

