import {Slide} from "../../types/types.ts";
import * as React from "react";
import './SlideEditor.scss'
import {useState} from "react";

interface SlideEditorProps {
    slide: Slide | undefined;
}

const SlideEditor: React.FC<SlideEditorProps> = ({ slide }) => {
    if (!slide) return <div className="slide-editor-placeholder">Выберите слайд</div>;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hoveredElementId, setHoveredElementId] = useState<number | null>(null); // Состояние для хранения ID наведенного элемента
    return (
        <div className="slide-editor-wrapper">
            <div className="slide-editor" style={{ backgroundColor: slide.backgroundColor}}>
                {slide.elements.map((el) => (
                    <div
                        key={el.id}
                        style={{
                            position: 'absolute',
                            left: el.position.x,
                            top: el.position.y,
                            width: el.size.width,
                            height: el.size.height,
                            border: hoveredElementId === el.id ? '2px solid blue' : 'none', // Выделение элемента при наведении
                        }}
                        onMouseEnter={() => setHoveredElementId(el.id)}
                        onMouseLeave={() => setHoveredElementId(null)}
                    >
                        {'text' in el ? (
                            <p style={{ fontSize: el.fontSize, fontFamily: el.fontFamily, color: `${el.color}` }}>
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
        </div>
    );
};

export default SlideEditor;
