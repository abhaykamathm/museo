export const wait = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const simulateClick = (element) => {
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
};

export const simulateHover = async (element, className) => {
  element.classList.add(className);
  await wait(1000);
  element.classList.remove(className);
};

export const simulateVerticalScroll = async (element, distance) => {
  element.scrollTo({
    top: distance,
    behavior: "smooth",
  });
};

export const simulateHorizontalScroll = async (element, distance) => {
  element.scrollTo({
    left: distance,
    behavior: "smooth",
  });
};
