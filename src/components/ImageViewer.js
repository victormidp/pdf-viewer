import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function ImageViewer() {
    return (
        <div className="imageViewer">
            <TransformWrapper>
                <TransformComponent>
                    <img src="https://via.placeholder.com/800x500.png" alt="test" className="imageViewer__image" />
                </TransformComponent>
            </TransformWrapper>
        </div>
	);
}

export default ImageViewer;
