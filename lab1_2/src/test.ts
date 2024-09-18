/* eslint-disable @typescript-eslint/no-unused-vars */
type Presentation = {
    name: string;
    slides: Slide[];
}

type Slide = {
    id: string;
    backgroundColor: string;
    elements: Array<textField | imageField>
}

type SelectSlide = {
    slideId: string;
    elementId: string;
}

const changePresentationName = (presentation: Presentation, newPresentationName: string): Presentation => {
    return {
        ...presentation,
        name: newPresentationName
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

const moveSlide = (presentation: Presentation, fromId: number, toId: number): Presentation => {
    const slides = [...presentation.slides];
    const [thisSlide] = slides.splice(fromId, 1);
    slides.splice(toId, 0, thisSlide);
    return {
        ...presentation,
        slides
    }
}

type textField = {
    id: string;
    text: string;
    textSize: number;
    textFamily: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
}

type imageField = {
    id: string
    Url: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
}


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


const changeBackFont = (slide: Slide, newBackColor: string): Slide => {
    return {
        ...slide,
        backgroundColor: newBackColor
    }
}

const changeText = (slide: Slide, elementId: string, newText: string): Slide => {
    return {    
        ...slide,
        elements: slide.elements.map(
            el => el.id === elementId 
            ? {...el, text: newText} 
            : el
        )
    }
}

const changeTextSize = (slide: Slide, elementId: string, newTextSize: number) => {
    return {
        ...slide, 
        elements: slide.elements.map(
            el => el.id === elementId 
            ? {...el, textSize: newTextSize} 
            : el
        )
    }
}

const changeTextFamily = (slide: Slide, elementId: string, newTextFamily: string): Slide => {
    return {
        ...slide, 
        elements: slide.elements.map(
            el => el.id === elementId
            ? {...el, textFamily: newTextFamily}
            : el
        )
    }
}

const changeCoordinates = (slide: Slide, elementId: string, newPosition: {newX: number, newY: number}) => { 
    return {
        ...slide,
        elements: slide.elements.map(
            el => el.id === elementId 
            ? {...el, position: newPosition}
            : el
        )
    }
}

// var mass = ['ads', '213', '123', '12111']
// console.log(mass.splice(2,1))
// var edit = mass.splice(2,0, '00')
// console.log(mass);


// const mass1 = [1, 2, 3, 4]
// const mass2 = [...mass1, 5, 6]
// console.log(mass2)