# Show Passwords Bookmarklet

a bookmarklet to show saved password!

# How to use

drag this link to your bookmark bar

```
javascript:(function()%7Bfunction%20previousElementSibling(element)%20%7B%0A%20%20if%20(element.previousElementSibling%20!%3D%3D%20%22undefined%22)%20%7B%0A%20%20%20%20return%20element.previousElementSibling%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20while%20((element%20%3D%20element.previousSibling))%20%7B%0A%20%20%20%20%20%20if%20(element.nodeType%20%3D%3D%3D%201)%20%7B%0A%20%20%20%20%20%20%20%20return%20element%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0Afunction%20getPath(element)%20%7B%0A%20%20if%20(!(element%20instanceof%20HTMLElement))%20%7B%0A%20%20%20%20return%20false%3B%0A%20%20%7D%0A%20%20var%20path%20%3D%20%5B%5D%3B%0A%20%20while%20(element.nodeType%20%3D%3D%3D%20Node.ELEMENT_NODE)%20%7B%0A%20%20%20%20var%20selector%20%3D%20element.nodeName%3B%0A%20%20%20%20if%20(element.id)%20%7B%0A%20%20%20%20%20%20selector%20%2B%3D%20%22%23%22%20%2B%20element.id%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20var%20sibling%20%3D%20element%3B%0A%20%20%20%20%20%20var%20siblingSelectors%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20while%20(sibling%20!%3D%3D%20null%20%26%26%20sibling.nodeType%20%3D%3D%3D%20Node.ELEMENT_NODE)%20%7B%0A%20%20%20%20%20%20%20%20siblingSelectors.unshift(sibling.nodeName)%3B%0A%20%20%20%20%20%20%20%20sibling%20%3D%20previousElementSibling(sibling)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20if%20(siblingSelectors%5B0%5D%20!%3D%3D%20%22HTML%22)%20%7B%0A%20%20%20%20%20%20%20%20siblingSelectors%5B0%5D%20%3D%20siblingSelectors%5B0%5D%20%2B%20%22%3Afirst-child%22%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20selector%20%3D%20siblingSelectors.join(%22%20%2B%20%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20path.unshift(selector)%3B%0A%20%20%20%20element%20%3D%20element.parentNode%3B%0A%20%20%7D%0A%20%20return%20path.join(%22%20%3E%20%22)%3B%0A%7D%0A%0Aif%20(document.body.dataset.passwordsElementSelector)%20%7B%0A%20%20let%20passwordInputs%20%3D%20JSON.parse(%0A%20%20%20%20document.body.dataset.passwordsElementSelector%0A%20%20)%3B%0A%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20passwordInputs.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20document.querySelector(passwordInputs%5Bi%5D).type%20%3D%20%22password%22%3B%0A%20%20%7D%0A%20%20delete%20document.body.dataset.passwordsElementSelector%3B%0A%7D%20else%20%7B%0A%20%20var%20passwordsElementSelectors%20%3D%20%5B%5D%3B%0A%0A%20%20var%20passwordElements%20%3D%20document.querySelectorAll('input%5Btype%3D%22password%22%5D')%3B%0A%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20passwordElements.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20passwordElements%5Bi%5D.type%20%3D%20%22text%22%3B%0A%20%20%20%20passwordsElementSelectors.push(getPath(passwordElements%5Bi%5D))%3B%0A%20%20%7D%0A%0A%20%20document.body.dataset.passwordsElementSelector%20%3D%20JSON.stringify(%0A%20%20%20%20passwordsElementSelectors%0A%20%20)%3B%0A%7D%7D)()%3B
```
