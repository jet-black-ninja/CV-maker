import { Accordion } from './shared/Accordion.jsx';
import { InputPersonalInfo } from "./InputPersonalInfo.jsx";
import { InputObjective } from "./InputObjective.jsx";

import { InputWorkExperiences } from './InputWorkExperiences.jsx';
import { InputProjects } from './InputProjects.jsx';
import { InputEducations } from './InputEducations.jsx';
import { InputCertifications } from "./InputCertifications.jsx";
import { InputAwards } from "./InputAwards";
import { InputSkills } from "./InputSkills";

import './CVInputSection.css';

function CVInputSection({ cvData, onChangeCV }) {
  const handleSavePersonalInfo = (info) => {
    onChangeCV({ ...cvData, personalInfo: info });
  }

  const handleChangeObjective = (obj) => {
    onChangeCV({ ...cvData, objective: obj });
  }

  const handleChangeWorkExperiences = (obj) => {
    onChangeCV({ ...cvData, workExperiences: obj });
  }

  const handleChangeProjects = (obj) => {
    onChangeCV({ ...cvData, projects: obj });
  }

  const handleChangeEducations = (obj) => {
    onChangeCV({ ...cvData, educations: obj });
  }

  const handleChangeCertifications = (obj) => {
    onChangeCV({ ...cvData, certifications: obj });
  }

  const handleChangeAwards = (obj) => {
    onChangeCV({ ...cvData, awards: obj });
  }

  const handleChangeSkills = (obj) => {
    onChangeCV({ ...cvData, skills: obj });
  }

  return (
    <div className="m-4 shadow-md rounded-md flex flex-col sticky top-0 overflow-auto h-full max-h-screen">
      <div className="flex flex-col gap-2">
        <Accordion title="Personal Info" expanded={true}>
          <InputPersonalInfo inputInfo={cvData.personalInfo} onSave={handleSavePersonalInfo} />
        </Accordion>

        <Accordion title="Objective" expanded={false}>
          <InputObjective objective={cvData.objective} onSave={handleChangeObjective} />
        </Accordion>

        <Accordion title="Work experiences" expanded={false}>
          <InputWorkExperiences workExperiences={cvData.workExperiences} onSave={handleChangeWorkExperiences} />
        </Accordion>

        <Accordion title="Projects" expanded={false}>
          <InputProjects projects={cvData.projects} onSave={handleChangeProjects} />
        </Accordion>

        <Accordion title="Educations" expanded={false}>
          <InputEducations educations={cvData.educations} onSave={handleChangeEducations} />
        </Accordion>

        <Accordion title="Certifications" expanded={false}>
          <InputCertifications certifications={cvData.certifications} onSave={handleChangeCertifications} />
        </Accordion>

        <Accordion title="Awards" expanded={false}>
          <InputAwards awards={cvData.awards} onSave={handleChangeAwards} />
        </Accordion>

        <Accordion title="Skills" expanded={false}>
          <InputSkills skills={cvData.skills} onSave={handleChangeSkills} />
        </Accordion>
      </div>

    </div>
  );
}

export default CVInputSection;
