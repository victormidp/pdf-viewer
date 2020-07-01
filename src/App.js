import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import Header from "./components/Header";
import ImageViewer from "./components/ImageViewer";
import imageData from "./data.json";


function App() {
	const [pageNumber, setPageNumber] = useState(1);
	return (
		<div className="app">
			<Header items={imageData} currentIdx={0} />
			<ImageViewer items={imageData} currentIdx={0} />
		</div>
	);
}

export default App;
