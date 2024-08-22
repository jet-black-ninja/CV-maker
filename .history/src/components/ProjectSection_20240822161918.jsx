import {HRLine } from "./shared/HR"
import {SectionTitle} from "./shared/SectionTitle"
import {Title} from "./shared/Title"

export function ProjectTableRow({row}){
    return (
        <tr className = "border">
            <td className = 'pl-2 my-2 font-bold border sub-title w-1/4'>{row.title}</td>
            <td >
                <p className="pl-2 my-2 ">{row.description}</p>
                {
                    row.items&&
                    <ul  className="pl-8 my-2">
                        {
                            row.items.map((item) => (
                                <li className = "list-disc" key={item} > {item}</li>
                            ))
                        }
                    </ul>
                }
            </td>
        </tr>
    );
}

function ProjectTable({project}){
    return (
        <>
            <div className = "flex flex-col">
                <Title title = {project.name} period = {project.period}/>
                <ProjectTable row={project.sections}/>
            </div>
        </>
    );
}

function ProjectSection({projects}){
    if(!projects || projects.length===0){
        return null;
    }
    return (
        <div className="flex flex-col mb-6">
            <SectionTitle title = "Projects"/>
            {
                projects.map((project)=>(
                    <div key ={project.id}>
                        <ProjectItem key = {project.id} project = {project}/>
                        <HRLine/>
                    </div>
                ))
            }
        </div>
    )
}
