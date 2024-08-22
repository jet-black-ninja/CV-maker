import {SectionTitle} from "./SectionTitle"

export function DisplaySection({title, description}){
    return (
        <>
            <div className = "flex flex-col mb-6">
            <SectionTitle title={title}/>
            <p>{description}</p>
            </div>
        </>
    );
}
