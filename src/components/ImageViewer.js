import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function ImageViewer({item}) {
    return (
        <div className="imageViewer">
            <TransformWrapper>
                <TransformComponent>
                    <div className="imageViewer__content">
                        <img src={item.url} alt="test" className="imageViewer__image" />
                        <div>
                        {item.title}
                        </div>
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </div>
	);
}

export default ImageViewer;
