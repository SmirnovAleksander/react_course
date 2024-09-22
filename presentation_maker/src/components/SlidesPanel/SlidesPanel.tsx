import * as React from "react";
import {Slide} from "../../types/types.ts";
import classes from "./SlidesPanel.module.scss";
import SlideMiniature from "./SlideMiniature/SlideMiniature.tsx";

interface SlidesPanelProps {
    slides: Slide[];
    onSlideSelect: (slide: Slide) => void;
}

const SlidesPanel: React.FC<SlidesPanelProps> = ({slides, onSlideSelect}) => {
    return (
        <div className={classes.slidePanel}>
            {slides.map( (slide, index) => (
                <SlideMiniature
                    key={slide.id}
                    slideNumber={index + 1}
                    slideColor={`${slide.backgroundColor}`}
                    onClick={() => onSlideSelect(slide)}
                />
            ))}
        </div>
    );
};

export default SlidesPanel;