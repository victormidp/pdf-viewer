import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function ImageViewer({item}) {
    return (
        <div className="imageViewer">
            <TransformWrapper>
                <TransformComponent>
                    <img src={item.url} alt="test" className="imageViewer__image" />
                    {item.title}
                </TransformComponent>
            </TransformWrapper>
        </div>
	);
}

export default ImageViewer;
