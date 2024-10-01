import * as React from "react";
import classes from './ToolBar.module.scss'

type ToolBarProps = {
    addNewSlide: () => void;
};

const ToolBar: React.FC<ToolBarProps> = ({addNewSlide}) => {
    return (
        <div className={classes.toolBar}>
            <button onClick={addNewSlide}>Добавить новый слайд</button>
        </div>
    );
};

export default ToolBar;