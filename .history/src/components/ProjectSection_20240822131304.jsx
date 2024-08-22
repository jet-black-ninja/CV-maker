import {HRLine } from "./shared/HR"
import {SectionTitle} from "./shared/SectionTitle"
import {TitleWithPeriod} from "./shared/Title"

function ProjectTableRow({row}){
    return (
        <tr className = "border">
            <td clasName = 'pl-2 my-2 font-bold border sub-title w-1/4'>{row.title}</td>
            <td >
                <p className="pl-2 my-2 "></p>
            </td>
        </tr>
    )
}