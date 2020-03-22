# Show Passwords Bookmarklet

a bookmarklet to show saved password!

# How to use

add this link to your bookmark bar

```
javascript:(function()%7Blet%20shownPasswords%20%3D%20document.querySelectorAll('input%5Bdata-is-password-field%5D')%3B%0Aif%20(shownPasswords.length%20!%3D%200)%20%7B%0A%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20shownPasswords.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20shownPasswords%5Bi%5D.type%20%3D%20'password'%3B%0A%20%20%20%20delete%20shownPasswords%5Bi%5D.dataset.isPasswordField%3B%0A%20%20%7D%0A%7D%20else%20%7B%0A%20%20var%20passwordElements%20%3D%20document.querySelectorAll('input%5Btype%3D%22password%22%5D')%3B%0A%20%20for%20(let%20i%20%3D%200%3B%20i%20%3C%20passwordElements.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20passwordElements%5Bi%5D.type%20%3D%20'text'%3B%0A%20%20%20%20passwordElements%5Bi%5D.dataset.isPasswordField%20%3D%20true%3B%0A%20%20%7D%0A%7D%7D)()%3B
```
