const backgrounds = [
  "dark-blue",
  "dark-purple",
  "rose",
  "dark-gray",
  "black",
  "marsala",
  "steelblue",
  "teal",
  "coral",
  "brown",
];

const fonts = [
  "antiquewhite",
  "pink",
  "cyan",
  "light-green",
  "white",
  "rosybrown",
  "dark-brown",
  "peru",
  "goldenrod",
  "midnightblue",
];

for (id of backgrounds) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", () => background(btn.style.background));
}

for (id of fonts) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", () => font(btn.style.background));
}

document.getElementById("clear").addEventListener("click", clear);

function background(bgcolor) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { background: bgcolor }, () =>
      console.log("bg sent")
    );
  });
}

function font(fontcolor) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { fontcolor: fontcolor }, () =>
      console.log("font color sent")
    );
  });
}

function clear() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { clear: "clear" }, () =>
      console.log("clear request sent")
    );
  });
}
