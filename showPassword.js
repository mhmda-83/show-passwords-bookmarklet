function previousElementSibling(element) {
  if (element.previousElementSibling !== "undefined") {
    return element.previousElementSibling;
  } else {
    while ((element = element.previousSibling)) {
      if (element.nodeType === 1) {
        return element;
      }
    }
  }
}
function getPath(element) {
  if (!(element instanceof HTMLElement)) {
    return false;
  }
  var path = [];
  while (element.nodeType === Node.ELEMENT_NODE) {
    var selector = element.nodeName;
    if (element.id) {
      selector += "#" + element.id;
    } else {
      var sibling = element;
      var siblingSelectors = [];
      while (sibling !== null && sibling.nodeType === Node.ELEMENT_NODE) {
        siblingSelectors.unshift(sibling.nodeName);
        sibling = previousElementSibling(sibling);
      }
      if (siblingSelectors[0] !== "HTML") {
        siblingSelectors[0] = siblingSelectors[0] + ":first-child";
      }
      selector = siblingSelectors.join(" + ");
    }
    path.unshift(selector);
    element = element.parentNode;
  }
  return path.join(" > ");
}

if (document.body.dataset.passwordsElementSelector) {
  let passwordInputs = JSON.parse(
    document.body.dataset.passwordsElementSelector
  );
  for (var i = 0; i < passwordInputs.length; i++) {
    document.querySelector(passwordInputs[i]).type = "password";
  }
  delete document.body.dataset.passwordsElementSelector;
} else {
  var passwordsElementSelectors = [];

  var passwordElements = document.querySelectorAll('input[type="password"]');
  for (var i = 0; i < passwordElements.length; i++) {
    passwordElements[i].type = "text";
    passwordsElementSelectors.push(getPath(passwordElements[i]));
  }

  document.body.dataset.passwordsElementSelector = JSON.stringify(
    passwordsElementSelectors
  );
}
