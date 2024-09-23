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
                id: "1",
                backgroundColor: "#B9982B",
                elements: [
                    {
                        id: "text1",
                        text: "Text free",
                        position: { x: 100, y: 100 },
                        size: { width: 200, height: 30 },
                        fontSize: 30,
                        fontFamily: "Times New roman",
                        color: "white",
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
                id: "2",
                backgroundColor: "#fff",
                elements: []
            },
            {
                id: "3",
                backgroundColor: "#232",
                elements: [
                    {
                        id: "text2",
                        text: "Text free 2",
                        position: { x: 100, y: 100 },
                        size: { width: 200, height: 30 },
                        fontSize: 30,
                        fontFamily: "Arial",
                        color: "white",
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
    });

    const addNewSlide = () => {
        const newSlide: Slide = {
            id: String(presentation.slides.length + 1),
            elements: [],
            backgroundColor: '#fff',  // Белый фон для нового слайда
        };

        // Обновляем презентацию и выводим её в консоль
        setPresentation((prevPresentation) => {
            const updatedPresentation = {
                ...prevPresentation,
                slides: [...prevPresentation.slides, newSlide],
            };

            // Выводим обновленный объект презентации в консоль
            console.log('Updated Presentation:', updatedPresentation);
            return updatedPresentation;
        });
    };

    const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

    return (
        <div className="app">
            <ToolBar addNewSlide={addNewSlide}/>
            <div className="content">
                <SlidesPanel slides={presentation.slides} onSlideSelect={setSelectedSlide}/>
                <SlideEditor slide={selectedSlide || presentation.slides[0]}/>
            </div>
        </div>
    );
};

export default App;