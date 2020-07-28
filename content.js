const bgcolor = localStorage.getItem("background");
const fontcolor = localStorage.getItem("fontcolor");
const body = document.querySelector("body");
const bodies = document.getElementsByTagName("body");
const divs = document.getElementsByTagName("div");
const paragraphs = document.getElementsByTagName("p");
const inputs = document.getElementsByTagName("input");
const as = document.getElementsByTagName("a");
const h1s = document.getElementsByTagName("h1");
const h2s = document.getElementsByTagName("h2");
const h3s = document.getElementsByTagName("h3");
const h4s = document.getElementsByTagName("h4");
const h5s = document.getElementsByTagName("h5");
const h6s = document.getElementsByTagName("h6");

//on page load
if (bgcolor) {
  body.style.background = bgcolor;
  changeBackgroundColor(bodies, divs, inputs);
}
if (fontcolor)
  changeFontColor(
    bodies,
    divs,
    inputs,
    paragraphs,
    h1s,
    h2s,
    h3s,
    h4s,
    h5s,
    h6s,
    as
  );

//when user clicks a color
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.background) {
    localStorage.setItem("background", request.background);
    changeBackgroundColor(bodies, divs, inputs);
  }

  if (request.fontcolor) {
    localStorage.setItem("fontcolor", request.fontcolor);
    changeFontColor(
      bodies,
      divs,
      inputs,
      paragraphs,
      h1s,
      h2s,
      h3s,
      h4s,
      h5s,
      h6s,
      as
    );
  }
});

function changeBackgroundColor() {
  const color = localStorage.getItem("background");
  for (elements of arguments) {
    for (element of elements) {
      element.style.background = color;
    }
  }
}

function changeFontColor() {
  const color = localStorage.getItem("fontcolor");
  for (elements of arguments) {
    for (element of elements) {
      element.style.color = color;
    }
  }
}
