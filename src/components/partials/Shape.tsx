import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Element } from "../../models/entities";

type ShapeProps = {
    element: Element
}

const calcSizeAfterRotation = (w: number, h: number, d: number) => {
    const r = d * (Math.PI / 180);
    const newW = w * Math.abs(Math.cos(r)) + h * Math.abs(Math.sin(r));
    const newH = w * Math.abs(Math.sin(r)) + h * Math.abs(Math.cos(r))
    return {
        newW: newW,
        newH: newH
    }
}

export const Shape = ({ element }: ShapeProps) => {

    const shapeRef = useRef<SVGEllipseElement | SVGRectElement>(null);

    const [rectValues, setRectValues] = useState<{ w: number, h: number }>({ w: 0, h: 0 });

    useLayoutEffect(() => {
        if (shapeRef.current) {
            const newSize = calcSizeAfterRotation(shapeRef.current.getBBox().width, shapeRef.current.getBBox().height, element.rotation);
            setRectValues({
                w: newSize.newW,
                h: newSize.newH
            });
        }
    }, [shapeRef.current]);

    return (
        <g>
            {element.type === "ellipse"
                ?
                <Fragment>
                    <ellipse
                        ref={shapeRef}
                        cx={element.width / 2}
                        cy={element.height / 2}
                        rx={element.width / 2}
                        ry={element.height / 2}
                        fill={element.color}
                        data-x={element.x}
                        data-y={element.y}
                        transform={
                            `translate(${element.x}, ${element.y}) 
                            rotate(${element.rotation}) 
                            translate(-${element.width / 2},-${element.height / 2})`
                        }>
                    </ellipse>
                    <circle data-mono="0.172" fill="#ffffff" cx={element.x} cy={element.y} r="4"></circle>
                    <text x={element.x + 5} y={element.y} fill="#ffffff"><tspan>{element.rotation}°</tspan></text>
                    <rect
                        fill="none"
                        strokeWidth="2"
                        strokeOpacity="0.4"
                        stroke="#ff0000"
                        width={rectValues.w}
                        height={rectValues.h}
                        transform={
                            `translate(${element.x}, ${element.y})
                            translate(-${rectValues.w / 2}, -${rectValues.h / 2})
                            `
                        }>
                    </rect>
                </Fragment>
                :
                <Fragment>
                    <rect
                        ref={shapeRef}
                        fill={element.color}
                        data-x={element.x}
                        data-y={element.y}
                        width={element.width}
                        height={element.height}
                        transform={
                            `translate(${element.x}, ${element.y}) 
                        rotate(${element.rotation}) 
                        translate(-${element.width / 2},-${element.height / 2})`
                        }>
                    </rect>
                    <circle data-mono="0.172" fill="#ffffff" cx={element.x} cy={element.y} r="4"></circle>
                    <text x={element.x + 5} y={element.y} fill="#ffffff"><tspan>{element.rotation}°</tspan></text>
                    <rect
                        fill="none"
                        strokeWidth="2"
                        strokeOpacity="0.4"
                        stroke="#ff0000"
                        width={rectValues.w + 10}
                        height={rectValues.h + 10}
                        transform={
                            `translate(${element.x}, ${element.y})
                        translate(-${rectValues.w / 2}, -${rectValues.h / 2})
                        `
                        }>
                    </rect>
                </Fragment>
            }
        </g>
    )
}
