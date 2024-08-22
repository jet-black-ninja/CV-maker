import {HRLine } from "./shared/HR"
import {SectionTitle} from "./shared/SectionTitle"
import {TitleWithPeriod} from "./shared/Title"

function ProjectTableRow({row}){
    return (
        <tr className = "border">
            <td clasName = 'pl-2 my-2 font-bold border sub-title w-1/4'>{row.title}</td>
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
    )
}

function ProjectTable({project}){
    return (
        <>
            <div className = "flex flex-col">
                <
            </div>
        </>
    )
}