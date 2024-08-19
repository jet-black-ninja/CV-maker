import {SectionTitle} from "./SectionTitle"

function DisplaySection({title, description}){
    return (
        <>
            <div className = "flex flex-col mb-6">
            <SectionTitle title={title} description={description}
            </div>
        </>
    )
}