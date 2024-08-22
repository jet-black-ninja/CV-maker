import { CertificationItem } from "./CertificationItem";
import { SectionTitle } from "./shared/SectionTitle";

export function CertificationSection({ certifications }) {
  if (!certifications || certifications.length === 0)
    return null;

  return (
    <>
      <SectionTitle title="Certifications" />
      <div className="flex flex-col mb-6">
        {certifications.map(certification => (
          <CertificationItem key={certification.id} certification={certification} />
        ))}
      </div>
    </>
  );
}

