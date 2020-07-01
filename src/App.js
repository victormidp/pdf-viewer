import React, { useState } from "react";
import { Document, Page, pdfjs, Outline } from "react-pdf";
import docfile from "./assets/docs/sampledoc.pdf";
import { Layout, Menu } from 'antd';
import Header from "./components/Header";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
	const [pageNumber, setPageNumber] = useState(1);
	return (
		<Layout>
			<Header />
			<Document file={docfile}>
				<Page pageNumber={pageNumber} />
			</Document>
		</Layout>
	);
}

export default App;
