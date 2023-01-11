import React from 'react'
// import PdfViewerComponent from '../components/pdf/PdfViewerComponent'
import { Viewer , Worker } from "@react-pdf-viewer/core";
import '@react-pdf-viewer/core/lib/styles/index.css'
import pdf from '../components/pdf/Guide.pdf'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import pdffile from '../img/Pylon Rewards_Q1_2023_Rev.00.pdf'


const CoinCategory = () => {
  const toolbarPluginInstance = toolbarPlugin();
  const { Toolbar } = toolbarPluginInstance;



  return (
    <>
        <div className='flex flex-col relative mx-2 pt-[90px] justify-center text-center h-full overflow-hidden'>
          {/* <PdfViewerComponent document="Guide.pdf" /> */}
        
          <Toolbar /> 

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js" >
              <Viewer fileUrl={pdffile}  plugins={[ toolbarPluginInstance]}/>;
            </Worker>
 
    
        </div>
    </>
  )
}

export default CoinCategory