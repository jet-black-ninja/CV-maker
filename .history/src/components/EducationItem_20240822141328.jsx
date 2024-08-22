import { ListSection } from "./shared/ListSection";
import { TitleWithPeriod } from "./shared/Title";

export function EducationItem({ education }) {
    return (
        <>
            {/*Work experience item*/}
            <div className="flex flex-col">
                {/*Company name*/}
                <TitleWithPeriod title={education.title} period={education.period} />

                {/*Job title*/}
                <p className="sub-title text-[0.8rem] mb-2">{education.subTitle}</p>
                {/*Job description list*/}
                <ul className="flex flex-col pl-4">
                    {education.sections && education.sections.map(section => (
                        <li key={section.id}>
                            <ListSection
                                title={section.title}
                                description={section.description}
                                items={section.items} />
                        </li>))}
                </ul>
                {/*End Job description list*/}
            </div>
            {/*End Work experience item*/}
        </>
    );

}

