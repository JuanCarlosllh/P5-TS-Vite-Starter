import P5 from "p5";
import { draw, setup } from "./sketch";

import "./style.css";

const sketch = (p5: P5) => {
  p5.setup = () => {
    const canvas = p5.createCanvas(500, 500);
    canvas.parent("sketch");

    setup(p5);
  };

  p5.draw = () => {
    draw(p5);
  };
};

new P5(sketch);
