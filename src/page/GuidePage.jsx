import React from 'react'
import PdfViewerComponent from '../components/pdf/PdfViewerComponent'


const GuidePage = () => {
  return (
    <>
        <div className='flex flex-1 relative mx-auto pt-[50px] text-center h-full overflow-hidden'>
          <PdfViewerComponent document="Guide.pdf" />
        </div>
    </>
  )
}

export default GuidePage