import * as React from "react";
import SlidesPanel from "./components/SlidesPanel/SlidesPanel.tsx";
import SlideEditor from "./components/SlideEditor/SlideEditor.tsx";
import {Presentation, Slide} from "./types/types.ts";
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import "./App.css";
import {useState} from "react";

const App:React.FC = () => {

    // const [presentation, setPresentation] = useState<Presentation>({
    //     title: 'My Presentation',
    //     slides: [],
    // });
    // const addNewSlide = () => {
    //     const newSlide: Slide = {
    //         id: String(presentation.slides.length + 1),
    //         elements: [],
    //         backgroundColor: '#fff',
    //     };
    //     setPresentation({
    //         ...presentation,
    //         slides: [...presentation.slides, newSlide],
    //     });
    // };

    const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

    const maxPresentation : Presentation = {
        title: "Presentation",
        slides: [
            {
                id: "1",
                backgroundColor: "#B9982B",
                elements: [
                    {
                        id: "text1",
                        text: "Text free",
                        position: { x: 100, y: 100 },
                        size: { width: 200, height: 30 },
                        fontSize: 30,
                        fontFamily: "Times New roman"
                    },
                    {
                        id: "image1",
                        url: "URL",
                        position: { x: 200, y: 200 },
                        size: { width: 200, height: 200 },
                    }
                ]
            },
            {
                id: "1",
                backgroundColor: "#fff",
                elements: []
            },
            {
                id: "2",
                backgroundColor: "#232",
                elements: [
                    {
                        id: "text2",
                        text: "Text",
                        position: { x: 10, y: 10 },
                        size: { width: 10, height: 10 },
                        fontSize: 10,
                        fontFamily: "Arial"
                    },
                    {
                        id: "image2",
                        url: "URL",
                        position: { x: 10, y: 10 },
                        size: { width: 10, height: 10 },
                    }
                ]
            }
        ]
    }

    return (
        <div className="app">
            <ToolBar/>
            <div className="content">
                <SlidesPanel slides={maxPresentation.slides} onSlideSelect={setSelectedSlide}/>
                <SlideEditor slide={selectedSlide || maxPresentation.slides[0]}/>
            </div>
        </div>
    );
};

export default App;