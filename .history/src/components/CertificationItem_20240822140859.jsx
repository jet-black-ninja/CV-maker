import { GrayHRLine } from "./shared/HR";
import { TitleWithPeriod } from "./shared/Title";

export function CertificationItem({ certification }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col w-full">
          <div>
            <TitleWithPeriod title={certification.title} period={certification.issuedDate} />
          </div>
          <p className="text-[0.8rem]">Issued by {certification.issuer}</p>
          <p className="mt-2">{certification.description}</p>
        </div>
      </div>
      <GrayHRLine />
    </>
  );
}