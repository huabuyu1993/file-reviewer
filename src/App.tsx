
import { useState } from 'react'
import "file-viewer";
// import FileViewer from 'react-file-viewer';
// import DocViewer, { PDFRenderer, PNGRenderer } from "react-doc-viewer";

import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;


function App() {


  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        options={{
          cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
        file="https://1024-cdn.xfyun.cn/translation-test/1654850604908/AboutFoxit.pdf"
        onLoadSuccess={onDocumentLoadSuccess}>

        {new Array(numPages).fill('').map((cur, index) => (
          <div style={{marginBottom:'10px',backgroundColor:'red'}}>
           <Page
            key={index}
            width={window.screen.width}
            pageNumber={index + 1}
          />
          </div>
          
        ))}

      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );

  // const docs = [
  //   { uri: "https://1024-cdn.xfyun.cn/translation-test/1654850604908/AboutFoxit.pdf" },

  // ];

  // return <file-viewer
  //   filename="some-excel-file.xlsx"
  //   url="https://link.com"
  // ></file-viewer>
  // return (
  //   <FileViewer
  //     fileType={'pdf'}
  //     filePath={"https://1024-cdn.xfyun.cn/translation-test/1654850604908/AboutFoxit.pdf"}
  //   // errorComponent={CustomErrorComponent}
  //   // onError={this.onError}
  //   />
  // );

  // return <file-viewer
  //   filename="Sample-Sales-Data.xlsx"
  //   url="http://reference1.mapinfo.com/software/anysite/english_AU/tutorials/Sample-Sales-Data.xlsx" />
  // return <DocViewer
  //   documents={docs}
  //   pluginRenderers={[PDFRenderer, PNGRenderer]}
  //   theme={{
  //     primary: "#5296d8",
  //     secondary: "#ffffff",
  //     tertiary: "#5296d899",
  //     text_primary: "#ffffff",
  //     text_secondary: "#5296d8",
  //     text_tertiary: "#00000099",
  //     disableThemeScrollbar: false,
  //   }}
  // />
}

export default App
