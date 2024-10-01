import * as React from "react";
import "./SlideMiniature.module.scss";
import classes from './SlideMiniature.module.scss'

interface SlideMiniatureProps {
    slideNumber: number;
    imageUrl?: string;
    slideColor?: string;
    onClick?: () => void;
    isSelected?: boolean;
}

const SlideMiniature: React.FC<SlideMiniatureProps> = ({slideNumber, imageUrl, slideColor, onClick}) => {
    return (
        <div className={classes.slideMiniatureWrapper}>
            <p className={classes.slideMiniatureNumber}>{slideNumber}</p>
            <div
                className={classes.slideMiniature}
                onClick={onClick}
                style={{
                    backgroundColor: imageUrl ? 'transparent' : `${slideColor}`,
                }}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt='Слайд'
                        className={classes.slideMiniatureImage}
                    />
                ) : (<div className={classes.slideMiniaturePlaceholder}>Слайд</div>)
                }
            </div>
        </div>

    );
};

export default SlideMiniature;