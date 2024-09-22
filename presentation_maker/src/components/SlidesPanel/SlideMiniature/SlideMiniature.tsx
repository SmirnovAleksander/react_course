import * as React from "react";
import "./SlideMiniature.scss";

interface SlideMiniatureProps {
    slideNumber: number;
    imageUrl?: string;
    slideColor?: string;
    onClick?: () => void;
}

const SlideMiniature: React.FC<SlideMiniatureProps> = ({slideNumber, imageUrl, slideColor, onClick}) => {
    return (
        <div className='slide-miniature-wrapper'>
            <p className='slide-miniature__number'>{slideNumber}</p>
            <div
                className='slide-miniature'
                onClick={onClick}
                style={{backgroundColor: imageUrl ? 'transparent' : `${slideColor}`}}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt='Слайд'
                        className='slide-miniature__image'
                    />
                ) : (<div className='slide-miniature__placeholder'>Слайд</div>)
                }
            </div>
        </div>

    );
};

export default SlideMiniature;