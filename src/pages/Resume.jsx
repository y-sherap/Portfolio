import { Document,Page } from 'react-pdf/dist/esm/entry.webpack'
import pdfFile from '../resume.pdf'

const Resume = () => {

  return (
    <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}

export default Resume