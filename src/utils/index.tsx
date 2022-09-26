export const getRandomNumber = () => {
  return Math.floor(Math.random() * (100 - 10)) + 10;
};

export const sizeFont = () => {
  const fontSize = document.querySelectorAll(".setFont");
  fontSize.forEach((el) => {
    var font_size = el.getAttribute("data-fontsize");
    //@ts-ignore
    el.style.fontSize = `${font_size}px`;
  });
};

export const setBg = () => {
  const el = document.querySelectorAll(".setBg");
  el.forEach((elem) => {
    var bg = elem.getAttribute("data-bg");

    elem.setAttribute("style", `background-image:url(${bg});`);
  });
};

export interface RouteInterface {
  id: number;
  element: JSX.Element;
  path: string;
}
