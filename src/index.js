import { createApp } from "petite-vue"

const getRandInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

function getRandColor() {
  const h = getRandInt(0, 360)
  const s = getRandInt(42, 98)
  const l = getRandInt(40, 90)
  return `hsl(${h}, ${s}%, ${l}%)`
}

createApp({
  size: ["10vmax", "10vmax"],
  borderRadius: "100%",
  skew: ["0deg", "0deg"],
  rotate: "0deg",
  colors: ["#fff", "#fff"],
  stopPos: "0%",
  gradientPos: ["50%", "50%"],
  blur: "1vmax",

  generate() {
    this.size = [...Array(2)].map(() => `${getRandInt(20, 50)}%`)
    this.borderRadius = [...Array(2)].map(() => [...Array(4)]
      .map(() => `${getRandInt(20, 100)}%`).join(" ")).join(" / ")
    this.skew = [...Array(2)].map(() => `${getRandInt(-15, 15)}deg`)
    this.rotate = `${getRandInt(-15, 15)}deg`
    this.colors = [...Array(2)].map(getRandColor)
    this.stopPos = `${getRandInt(0, 50)}%`
    this.gradientPos = [...Array(2)].map(() => `${getRandInt(-100, 100)}%`)
    this.blur = `${getRandInt(2, 3)}vmax`
  },
}).mount()
