// Buttons
let shareButton = document.querySelector("#share-button");
let shareCloseButton = document.querySelector("#share-close-button");
let copyToClipboard = document.querySelector("#copy");

// Popups
let sharePopup = document.querySelector("#share-popup");

//Other
let copyText = document.querySelector("#copyText");
let sessionLoader = window.sessionStorage.getItem("sessionDone");

// Functions

openShare = () => {
  sharePopup.classList.remove("u-scale");
};

closeShare = (e) => {
  if (e.target.id === "share-close-button" || e.target.id === "share-popup") {
    sharePopup.classList.add("u-scale");
    copyText.innerHTML = "Get Link";
  } else {
    return;
  }
};

clipboard = () => {
  navigator.clipboard.writeText("URL");
  copyText.innerHTML = "Copied";
};

hideLoader = () => {
  console.log(sessionLoader);
  if (sessionLoader === "1") {
    loader.style.display = "none";
  } else {
    window.sessionStorage.setItem("sessionDone", 1);
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);
    }, 5000);
  }
};

// Code

// Makes loader play on only first load. 
if (document.querySelector("h1").innerHTML === "Genevieve Dorion | Art") {
  let loader = document.querySelector("#loader");
  if (sessionLoader === "1") {
    loader.style.display = "none";
  }
  window.addEventListener("load", hideLoader);
}

shareButton.addEventListener("click", openShare);
shareCloseButton.addEventListener("click", closeShare);
sharePopup.addEventListener("click", closeShare);
copyToClipboard.addEventListener("click", clipboard);

