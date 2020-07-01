import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Document, Page, pdfjs, Outline } from "react-pdf";
import docfile from "./assets/docs/sampledoc.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
	const [pageNumber, setPageNumber] = useState(1);
	return (
		<div className="App">
			<Document file={docfile}>
				<Outline onItemClick={({ pageNumber }) => setPageNumber(pageNumber)} />
				<Page pageNumber={pageNumber} />
			</Document>
		</div>
	);
}

export default App;
