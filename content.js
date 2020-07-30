const body = document.querySelector("body");
const bgcolor = localStorage.getItem("background");
const fontcolor = localStorage.getItem("fontcolor");

const elements = {
  bodies: document.getElementsByTagName("body"),
  divs: document.getElementsByTagName("div"),
  spans: document.getElementsByTagName("span"),
  paragraphs: document.getElementsByTagName("p"),
  inputs: document.getElementsByTagName("input"),
  tds: document.getElementsByTagName("td"),
  as: document.getElementsByTagName("a"),
  h1s: document.getElementsByTagName("h1"),
  h2s: document.getElementsByTagName("h2"),
  h3s: document.getElementsByTagName("h3"),
  h4s: document.getElementsByTagName("h4"),
  h5s: document.getElementsByTagName("h5"),
  h6s: document.getElementsByTagName("h6"),
  ems: document.getElementsByTagName("em"),
  footers: document.getElementsByTagName("footer"),
};

//on page load
if (bgcolor) {
  body.style.background = bgcolor;
  changeBackgroundColor(elements);
}
if (fontcolor) changeFontColor(elements);

//when user clicks a color
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const background = request.background;
  const fontcolor = request.fontcolor;

  if (background) {
    console.log("in bg");
    if (localStorage.getItem("background") !== background) {
      localStorage.setItem("background", background);
      changeBackgroundColor(elements);
    }
  }

  if (fontcolor) {
    if (localStorage.getItem("fontcolor") !== fontcolor) {
      localStorage.setItem("fontcolor", fontcolor);
      changeFontColor(elements);
    }
  }

  if (request.clear) {
    if (localStorage.getItem("background") !== "") {
      localStorage.setItem("background", "");
      changeBackgroundColor(elements);
    }
    if (localStorage.getItem("fontcolor") !== "") {
      localStorage.setItem("fontcolor", "");
      changeFontColor(elements);
    }
  }
});

function changeBackgroundColor(allElements) {
  const color = localStorage.getItem("background");

  for (elmts in allElements) {
    for (let i = 0; i < allElements[elmts].length; i++) {
      allElements[elmts][i].style.background = color;
    }
  }
}

function changeFontColor(allElements) {
  const color = localStorage.getItem("fontcolor");
  for (elmts in allElements) {
    for (let i = 0; i < allElements[elmts].length; i++) {
      allElements[elmts][i].style.color = color;
    }
  }
}
