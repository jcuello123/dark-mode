const backgrounds = ["dark-blue", "dark-purple", "dark-green", "dark-gray"];

const fonts = ["antiquewhite", "lavender", "cyan", "light-green"];

for (id of backgrounds) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", () => background(btn.style.background));
}

for (id of fonts) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", () => font(btn.style.background));
}

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
