import * as React from "react";
import "./ToolBar.scss";


type ToolBarProps = {
    addNewSlide?: () => void;
};

const ToolBar: React.FC<ToolBarProps> = ({addNewSlide}) => {
    return (
        <div className='tool-bar'>
            <button onClick={addNewSlide}>Добавить новый слайд</button>
        </div>
    );
};

export default ToolBar;