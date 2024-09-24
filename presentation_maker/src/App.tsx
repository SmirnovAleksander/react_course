import * as React from "react";
import SlidesPanel from "./components/SlidesPanel/SlidesPanel.tsx";
import SlideEditor from "./components/SlideEditor/SlideEditor.tsx";
import {Presentation, Slide} from "./types/types.ts";
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import "./App.css";
import {useState} from "react";

const App:React.FC = () => {

    const [presentation, setPresentation] = useState<Presentation>({
        title: "Presentation",
        slides: [
            {
                id: 1,
                backgroundColor: "#B9982B",
                elements: [
                    {
                        id: 1,
                        text: "Text free",
                        position: { x: 100, y: 100 },
                        size: { width: 200, height: 30 },
                        fontSize: 30,
                        fontFamily: "Times New Roman",
                        color: "white",
                    },
                    {
                        id: 2,
                        url: "URL",
                        position: { x: 200, y: 200 },
                        size: { width: 200, height: 200 },
                    }
                ]
            },
            {
                id: 2,
                backgroundColor: "#fff",
                elements: []
            },
            {
                id: 3,
                backgroundColor: "#232",
                elements: [
                    {
                        id: 3,
                        text: "Text free 2",
                        position: { x: 100, y: 100 },
                        size: { width: 200, height: 30 },
                        fontSize: 30,
                        fontFamily: "Arial",
                        color: "white",
                    },
                    {
                        id: 4,
                        url: "URL",
                        position: { x: 10, y: 10 },
                        size: { width: 10, height: 10 },
                    }
                ]
            }
        ]
    });


    const addNewSlide = () => {
        const newSlide: Slide = {
            id: presentation.slides.length + 1,
            elements: [],
            backgroundColor: '#fff',
        };

        setPresentation((prevPresentation) => {
            const updatedPresentation = {
                ...prevPresentation,
                slides: [...prevPresentation.slides, newSlide],
            };

            setSelectedSlide(newSlide);
            setSelectedSlideId(newSlide.id);

            console.log('Updated Presentation:', updatedPresentation);
            return updatedPresentation;
        });
    };

    const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null); //для слайд редактора
    const [selectedSlideId, setSelectedSlideId] = useState<number | null>(null); //для слайд панели(слева)

    const handleSlideSelect = (slide: Slide) => {
        setSelectedSlideId(slide.id);
        setSelectedSlide(slide);
    };

    return (
        <div className="app">
            <ToolBar addNewSlide={addNewSlide}/>
            <div className="content">
                <SlidesPanel selectedSlideId={selectedSlideId} slides={presentation.slides} onSlideSelect={handleSlideSelect}/>
                <SlideEditor slide={selectedSlide || presentation.slides[0]}/>
            </div>
        </div>
    );
};

export default App;