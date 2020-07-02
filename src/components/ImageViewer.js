import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button, ButtonGroup } from "reactstrap";

function ImageViewer({ item }) {
	return (
		<div className="imageViewer">
			
            <TransformWrapper>
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <>
                        <div class="controlMenu">
                            <ButtonGroup>
                                <Button onClick={zoomOut}>-</Button>
                                <Button onClick={resetTransform}>Reset</Button>
                                <Button onClick={zoomIn}>+</Button>
                            </ButtonGroup>
                        </div>
                        <TransformComponent>
                            <div className="imageViewer__content">
                                <img src={item.url} alt="test" className="imageViewer__image" />
                                <div>{item.title}</div>
                            </div>
                        </TransformComponent>
                    </>
                )}
			</TransformWrapper>
		</div>
	);
}

export default ImageViewer;
