import { CSSProperties } from "react";

export interface Element {
    id: string,
    type: "rectangle" | "ellipse",
    color: CSSProperties["color"],
    rotation: number,
    x: number,
    y: number,
    width: number,
    height: number
}

export interface Project {
    id: string,
    name: string,
    width: number,
    height: number,
    items: Element[]
}