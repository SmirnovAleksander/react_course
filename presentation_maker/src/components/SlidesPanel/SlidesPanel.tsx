import * as React from "react";
import {Slide} from "../../types/types.ts";
import "./SlidesPanel.scss";
import SlideMiniature from "./SlideMiniature/SlideMiniature.tsx";

interface SlidesPanelProps {
    slides: Slide[];
    onSlideSelect: (slide: Slide) => void;
}

const SlidesPanel: React.FC<SlidesPanelProps> = ({slides, onSlideSelect}) => {
    return (
        <div className='slides-panel'>
            {slides.map( (slide, index) => (
                <SlideMiniature
                    key={index}
                    slideNumber={index + 1}
                    slideColor={`${slide.backgroundColor}`}
                    onClick={() => onSlideSelect(slide)}
                />
            ))}
        </div>
    );
};

export default SlidesPanel;