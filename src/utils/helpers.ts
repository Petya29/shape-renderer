export const  getContrastColor = (hexColor: string | null | undefined): string => {
    if (!hexColor || hexColor === '' || hexColor === "#000000") return '#ffffff';

    var r = parseInt(hexColor.substr(1, 2), 16);
    var g = parseInt(hexColor.substr(3, 2), 16);
    var b = parseInt(hexColor.substr(5, 2), 16);
  
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    return brightness > 220 ? "#000000" : "#FFFFFF";
  }

export const calcSizeAfterRotation = (w: number, h: number, d: number) => {
    const r = d * (Math.PI / 180);
    const newW = w * Math.abs(Math.cos(r)) + h * Math.abs(Math.sin(r));
    const newH = w * Math.abs(Math.sin(r)) + h * Math.abs(Math.cos(r))
    return {
        newW: newW,
        newH: newH
    }
}