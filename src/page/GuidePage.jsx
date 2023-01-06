import React from 'react'
import PdfViewerComponent from '../components/pdf/PdfViewerComponent'
import { Viewer , Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css'
import pdf from '../components/pdf/Guide.pdf'

const GuidePage = () => {
  return (
    <>
        <div className='flex flex-1 relative mx-auto pt-[50px] text-center h-full overflow-hidden'>
          {/* <PdfViewerComponent document="Guide.pdf" /> */}
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js" >
            <Viewer fileUrl={pdf} />;
          </Worker>
        </div>
    </>
  )
}

export default GuidePage