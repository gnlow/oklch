import Color from "https://esm.sh/colorjs.io@0.6.1"

export const hex =
(l: number, c: number, h: number) =>
    new Color("oklch", [l, c, h])
        .toString({ format: "hex" })

export const rgb =
(l: number, c: number, h: number) =>
    new Color("oklch", [l, c, h])
        .to("srgb")
        .coords
        .map(v => Math.round(Math.max(0, Math.min(v, 1))*255))
