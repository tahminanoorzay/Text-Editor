document.addEventListener("DOMContentLoaded", function () {
  // varibals
  let editor = document.getElementById("editor");
  let fontSizeInput = document.getElementById("fontSizeInput");
  let boldButton = document.getElementById("boldButton");
  let italicButton = document.getElementById("italicButton");
  let underlineButton = document.getElementById("underlineButton");
  let strikeThroughButton = document.getElementById("strikeThroughButton");
  let justifyLeftButton = document.getElementById("justifyLeftButton");
  let justifyCenterButton = document.getElementById("justifyCenterButton");
  let justifyRightButton = document.getElementById("justifyRightButton");
  let fontSelect = document.getElementById("fontSelect");
  let toUpperCaseButton = document.getElementById("toUpperCaseButton");
  let colorChange = document.getElementById("color");
  // Events

  fontSizeInput.addEventListener("input", function () {
    editor.style.fontSize = fontSizeInput.value + "px";
  });
  boldButton.addEventListener("click", function () {
    document.execCommand("bold", false);
  });

  italicButton.addEventListener("click", function () {
    document.execCommand("italic", false);
  });

  underlineButton.addEventListener("click", function () {
    document.execCommand("underline", false);
  });

  strikeThroughButton.addEventListener("click", function () {
    document.execCommand("strikeThrough", false);
  });

  justifyLeftButton.addEventListener("click", function () {
    document.execCommand("justifyLeft", false);
  });

  justifyCenterButton.addEventListener("click", function () {
    document.execCommand("justifyCenter", false);
  });

  justifyRightButton.addEventListener("click", function () {
    document.execCommand("justifyRight", false);
  });

  toUpperCaseButton.addEventListener("click", function () {
    document.execCommand("insertText", false, getSelectedText().toUpperCase());
  });

  colorChange.addEventListener("input", function () {
    document.execCommand("foreColor", false, colorChange.value);
  });

  function getSelectedText() {
    let selection = window.getSelection();
    return selection.toString();
  }
});
