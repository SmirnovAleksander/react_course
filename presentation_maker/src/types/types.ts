export type Presentation = {
    title: string;
    slides: Slide[];
}

export type Slide = {
    id: string;
    elements: Array<textField | imageField>;
    backgroundColor: string;
}

export type SelectSlide = {
    slideId: string;
    elementId: string;
}
export type textField = {
    id: string;
    text: string;
    fontSize: number;
    fontFamily: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
    color: string;
}

export type imageField = {
    id: string
    url: string;
    position: { x: number; y: number };
    size: { width: number; height: number };
}