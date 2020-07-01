import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import Header from "./components/Header";
import ImageViewer from "./components/ImageViewer";
import imageData from "./data.json";


function App() {
	const [pageIdx, setPageIdx] = useState(0);
	return (
		<div className="app">
			<Header items={imageData} currentIdx={pageIdx} onOptionChange={setPageIdx} />
			<ImageViewer item={imageData[pageIdx]} />
		</div>
	);
}

export default App;
