import {HRLine} from "./shared/HR"
import {TitleWithPeriod} from "./shared/Title"

export function AwardItem ({award}){
    return (
        <>
            <div className = "flex justify-between">
                <div className = "flex flex-col w-full">
                    <div >
                        <TitleWithPeriod title ={award.title} period = {award.period}/>
                    </div>
                    <p className = "text-[0.8rem]">Issued By {award.issuer}</p>
                    <p className ="mt-2" > {award.descr</p>
                 </div>
            </div>
        </>
    )
}