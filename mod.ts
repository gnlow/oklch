import Color from "https://esm.sh/colorjs.io@0.6.1"

export const hex =
(l: number, c: number, h: number) =>
    new Color("oklch", [l, c, h])
        .toString({ format: "hex" })
