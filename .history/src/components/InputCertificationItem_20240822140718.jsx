import { TextInput } from "./shared/TextInput";
import { TextAreaInput } from "./shared/TextAreaInput";

export function InputCertificationItem({ certification, onSave, onRemove }) {
  return (
    <>
      <div className="relative max-w">
        <button className="absolute top-0 -ml-3.5 h-8 w-8 rounded-full bg-white text-red-500 border-2 hover:border-red-500 flex justify-center items-center"
          onClick={() => { onRemove(certification.id); }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="mt-6 border-l-4 border-dotted px-4">
          <div className="my-4 px-4">
            <div className="flex flex-col">
              <div className="w-full mb-4">
                {/* Certification name */}
                <TextInput title="Certification Name" id={certification.id + "-name"} initialValue={certification.title}
                  placeholder="Input certification name..."
                  onChange={(value) => onSave({ ...certification, title: value })} />
              </div>
              <div className="w-full mb-4">
                {/* Issuer */}
                <TextInput title="Issuer" id={certification.id + "-issuer"} initialValue={certification.issuer}
                  placeholder="Input certification issuer..."
                  onChange={(value) => onSave({ ...certification, issuer: value })} />
              </div>
              <div className="w-full mb-4">
                {/* Issue Date */}
                <TextInput title="Issued Date" id={certification.id + "-issued-date"} initialValue={certification.issuedDate}
                  placeholder="Input certification issued date..."
                  onChange={(value) => onSave({ ...certification, issuedDate: value })} />
              </div>
              <div className="w-full mb-4">
                {/* Description */}
                <TextAreaInput title="Description" placeholder="Input certification's description..." id={certification.id + "-desc"} initialValue={certification.description}
                  onChange={(value) => onSave({ ...certification, description: value })} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

