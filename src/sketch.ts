import P5 from "p5";

export const setup = (p5: P5) => {
  p5.background("#393E46");
  p5.ellipse(200, 200, 80, 80);
};

export const draw = (p5: P5) => {
  const { mouseX, mouseY } = p5;
  if (mouseX > 0 && mouseY > 0) {
    p5.ellipse(mouseX, mouseY, 80, 80);
  }
};
