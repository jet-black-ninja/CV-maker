import {HRLine} from "./shared/HR"
import {Title} from "./shared/Title"

export function AwardItem ({award}){
    return (
        <>
            <div className = "flex justify-between">
                <div className = "flex flex-col w-full">
                    <div >
                        <Title title ={award.title} period = {award.period}/>
                    </div>
                    <p className = "text-[0.8rem]">Issued By {award.issuer}</p>
                    <p className ="mt-2" > {award.description}</p>
                 </div>
            </div>
            <HRLine/>
        </>
    );
}