export type Presentation = {
    title: string;
    slides: Slide[];
}

export type Slide = {
    id: number;
    elements: Array<textField | imageField>;
    backgroundColor: string;
}

export type SelectSlide = {
    slideId: string;
    elementId: string;
}
export type textField = {
    id: number;
    text: string;
    fontSize: number;
    fontFamily: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
    color: string;
}

export type imageField = {
    id: number;
    url: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
}