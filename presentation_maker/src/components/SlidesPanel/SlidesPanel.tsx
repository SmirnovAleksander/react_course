import * as React from "react";
import {Slide} from "../../types/types.ts";
import SlideMiniature from "./SlideMiniature/SlideMiniature.tsx";
import classes from './SlidesPanel.module.scss'

interface SlidesPanelProps {
    slides: Slide[];
    onSlideSelect: (slide: Slide) => void;
    selectedSlideId: number | null;
}

const SlidesPanel: React.FC<SlidesPanelProps> = ({slides, onSlideSelect, selectedSlideId}) => {
    return (
        <div className={classes.slidesPanel}>
            {slides.map( (slide, index) => (
                <SlideMiniature
                    key={index}
                    slideNumber={index + 1}
                    slideColor={`${slide.backgroundColor}`}
                    onClick={() => onSlideSelect(slide)}
                    isSelected={slide.id === selectedSlideId}
                />
            ))}
        </div>
    );
};

export default SlidesPanel;