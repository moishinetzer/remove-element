let recent;

chrome.runtime.onMessage.addListener(() => {
  if (recent) {
    recent.remove();
    return true
  }
});

const getIt = () => {
  document.onmousedown = (e) => {
    recent = e.path[0];
  }
}

var counter = 0;
var myFunction = () => {
  getIt()
  counter += 1000;
  if (counter <= 5000) {
    timeout = setTimeout(myFunction, counter);
  }
}
var timeout = setTimeout(myFunction, counter);