/* eslint-disable @typescript-eslint/no-unused-vars */
import * as util from 'util';

type Presentation = {
    title: string;
    slides: Slide[];
}

type Slide = {
    id: string;
    elements: Array<textField | imageField>;
    backgroundColor: string;
}

type SelectSlide = {
    slideId: string;
    elementId: string;
}
type textField = {
    id: string;
    text: string;
    fontSize: number;
    fontFamily: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
}

type imageField = {
    id: string
    url: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
}

// type positionElement = {
//     position: { x: number; y: number };
//     size: { width: number; height: number };
// }

// type textField = positionElement&{
//     id: string;
//     text: string;
//     fontSize: number;
//     fontFamily: string;
// }

// type imageField = positionElement&{
//     id: string
//     Url: string;
// }


const changePresentationTitle = (presentation: Presentation, newPresentationTitle: string): Presentation => {
    return {
        ...presentation,
        title: newPresentationTitle
    }
}

const addSlide = (presentation: Presentation, newSlide: Slide): Presentation => {
    return {
        ...presentation,
        slides: [...presentation.slides, newSlide]  
    }
}

const removeSlide = (presentation: Presentation, slideId: string): Presentation => {
    return {
        ...presentation, slides: presentation.slides.filter(el => el.id !== slideId)
    }
}

const moveSlide = (presentation: Presentation, fromIndex: number, toIndex: number): Presentation => {
    const slides = [...presentation.slides];
    const [thisSlide] = slides.splice(fromIndex, 1);
    slides.splice(toIndex, 0, thisSlide);
    return {...presentation, slides}
}
//Изменение элемента
const addElement = (slide: Slide, newElement: textField | imageField) : Slide => {
    return {
        ...slide, 
        elements: [...slide.elements, newElement]
    }
}

const removeElement = (slide: Slide, elmentId: string): Slide => {
    return {
        ...slide, 
        elements: slide.elements.filter(el => el.id !== elmentId)
    }
}

const moveElement = (slide: Slide, elementId: string, x: number, y: number): Slide =>  {
    return {
        ...slide,
        elements: slide.elements.map(el =>
        el.id === elementId ? { ...el, position: { x, y } } : el
        )
    };
}

const resizeElement = (slide: Slide, elementId: string, width: number, height: number) : Slide => {
    return {
        ...slide,
        elements: slide.elements.map(el => 
            el.id === elementId ? {...el, size: {width, height}} : el
        )
    };
}
//Изменение текста
const changeText = (slide: Slide, elementId: string, newText: string): Slide => {
    return {    
        ...slide,
        elements: slide.elements.map(
            el => el.id === elementId 
            ? {...el, text: newText} 
            : el
        )
    };
}

const changeTextSize = (slide: Slide, elementId: string, newFontSize: number) => {
    return {
        ...slide, 
        elements: slide.elements.map(
            el => el.id === elementId 
            ? {...el, fontSize: newFontSize} 
            : el
        )
    };
}

const changeTextFontFamily = (slide: Slide, elementId: string, newFontFamily: string): Slide => {
    return {
        ...slide, 
        elements: slide.elements.map(
            el => el.id === elementId
            ? {...el, fontFamily: newFontFamily}
            : el
        )
    };
}
//Слайд
const changeSlideBackground = (slide: Slide, newBackColor: string): Slide => {
    return {
        ...slide,
        backgroundColor: newBackColor
    }
}


// Минимум данныхх

const minPresentation: Presentation = {
    title: "",
    slides: []
}
const minSlide: Slide = {
    id: "slide1",
    backgroundColor: "",
    elements: []
}

const maxPresentation : Presentation = {
    title: "Presentation",
    slides: [
        {
            id: "1",
            backgroundColor: "#000",
            elements: [
                {
                    id: "text1",
                    text: "Text",
                    position: { x: 10, y: 10 },
                    size: { width: 10, height: 10 },
                    fontSize: 10,
                    fontFamily: "Times New roman"
                },
                {
                    id: "image1",
                    url: "URL",
                    position: { x: 10, y: 10 },
                    size: { width: 10, height: 10 },
                }
            ]
        },
        {
            id: "2",
            backgroundColor: "#FFFF",
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

const maxSlide : Slide = maxPresentation.slides[0]

const printFunc = (func: Slide | Presentation) => {
    console.log(util.inspect(func, { depth: null, colors: true , breakLength: 50, showHidden: true}));
    console.log("__________________________________________")
  }
//Тест всех функций 
//Min data
console.log('min data*****');
printFunc(minPresentation);
printFunc(minSlide);
printFunc(changePresentationTitle(minPresentation, "new min title"));
printFunc(addSlide(minPresentation, minSlide));
printFunc(removeSlide(minPresentation, "slide1"));
printFunc(moveElement(minSlide, "text1", 100, 100));
printFunc(resizeElement(minSlide, "text1", 100, 100));
printFunc(changeText(minSlide, "text1", "new min text"));
printFunc(changeTextSize(minSlide, "text1", 14));
printFunc(changeTextFontFamily(minSlide, "text1", "new font family"));
printFunc(changeSlideBackground(minSlide, "#FFFFFF"));
//max data
console.log('max data*****');
printFunc(maxPresentation);
printFunc(maxSlide);
printFunc(changePresentationTitle(maxPresentation, "new max title"));
printFunc(addSlide(maxPresentation, maxSlide));
printFunc(removeSlide(maxPresentation, "1"));
printFunc(moveElement(maxSlide, "text1", 100, 100));
printFunc(resizeElement(maxSlide, "text1", 100, 100));
printFunc(changeText(maxSlide, "text1", "new max text"));
printFunc(changeTextSize(maxSlide, "text1", 20));
printFunc(changeTextFontFamily(maxSlide, "text1", "text font"));
printFunc(changeSlideBackground(maxSlide, "#FFFFFF"));