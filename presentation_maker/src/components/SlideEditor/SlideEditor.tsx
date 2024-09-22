import {Slide} from "../../types/types.ts";
import * as React from "react";

interface SlideEditorProps {
    slide: Slide | undefined;
}

const SlideEditor: React.FC<SlideEditorProps> = ({ slide }) => {
    if (!slide) return <div>Выберите слайд</div>;

    return (
        <div className="slide-editor" style={{ backgroundColor: slide.backgroundColor, position: 'relative', height: '100%', width: '100%' }}>
            {slide.elements.map((el) => (
                <div
                    key={el.id}
                    style={{
                        position: 'absolute',
                        left: el.position.x,
                        top: el.position.y,
                        width: el.size.width,
                        height: el.size.height,
                    }}
                >
                    {'text' in el ? (
                        <p style={{ fontSize: el.fontSize, fontFamily: el.fontFamily }}>
                            {el.text}
                        </p>
                    ) : (
                        <img
                            src={el.url}
                            alt=""
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SlideEditor;