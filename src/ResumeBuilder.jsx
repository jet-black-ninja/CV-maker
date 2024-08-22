import { useState } from 'react';
import CVInputSection from './components/CVInputSection.jsx';
import CVDisplaySection from './components/CVDisplaySection.jsx';
import { ButtonGroup } from "./components/ButtonGroup";

import { sampleData } from './data.jsx';
import { emptyData } from './emptyData.jsx';
import DynamicTitle from './components/shared/DynamicTitle.jsx';

function ResumeBuilder() {
  const [cvData, setCVData] = useState(sampleData);

  const handleCVChange = (newCVData) => {
    setCVData(newCVData);
  }

  const handleLoadSample = () => {
    setCVData(sampleData);
  }

  const handleDownloadCV = () => {
    window.print();
  }

  const handleClear = () => {
    setCVData(emptyData);
  }

  return (
    <div className="mt-8 flex flex-col">
      <DynamicTitle title="Simple Resume - Builder" />
      <div className="print:hidden flex justify-end border-b p-4 gap-2">
        <ButtonGroup onLoadSample={handleLoadSample}
          onDownload={handleDownloadCV}
          onClear={handleClear} />
      </div>
      <div className="content h-full flex relative">
        <div className="print:hidden flex justify-center w-1/3">
          <CVInputSection cvData={cvData} onChangeCV={handleCVChange} />
        </div>
        <div className="print:w-full h-full flex justify-center w-2/3">
          <CVDisplaySection cvData={cvData} />
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder;
