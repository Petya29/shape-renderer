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

export const isElement = (obj: any): obj is Element => {
    return (
        obj &&
        typeof obj === "object" &&
        typeof obj["id"] === "string" &&
        typeof obj["type"] === "string" &&
        typeof obj["color"] === "string" &&
        typeof obj["rotation"] === "number" &&
        typeof obj["x"] === "number" &&
        typeof obj["y"] === "number" &&
        typeof obj["width"] === "number" &&
        typeof obj["height"] === "number"
    );
}