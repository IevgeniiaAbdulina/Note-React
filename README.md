# Note React Application

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

<img src="/src/img/desktop-dark-screenshot.png" width="600">
<br>
<img src="/src/img/desktop-light-screenshot.png" width="600">
<br>
<img src="/src/img/mobile-dark-screenshot.png" width="300"> <img src="/src/img/mobile-light-screenshot.png" width="300">

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)
## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Using CSS variables:
```css
:root {
  --dark-grayish-blue: hsl(236, 9%, 61%);
}

.wrapper {
  background-color: var(--dark-grayish-blue)
}
```

CSS rounded corners with gradient border :
```css
.uncompleted:hover::before{
    content: '';
    width: 125%;
    height: 125%;
    display: inline-block;
    position: relative;
    top: -10%;
    left: -12%;
    background-image: var(--primary-check-background);
    border-radius: 50%;
}

.uncompleted:hover::after{
    content: '';
    width: 110%;
    height: 110%;
    display: inline-block;
    position: relative;
    top: -148%;
    left: -4%;
    border-radius: 50%;
}
```

### Continued development

Drag and Drop to reorder items on the list.

### Useful resources

[Example resource Creating a Drag and Drop List with React Hooks](https://dev.to/florantara/creating-a-drag-and-drop-list-with-react-hooks-4c0i) - This source is very helped me to understand the principles of DnD with React Hooks.

## Author

- Website - [Ievgeniia Abdulina](https://codepen.io/ievgeniiaabdulina/full/VweMyLM)
- Frontend Mentor - [@IevgeniiaAbdulina](https://www.frontendmentor.io/profile/IevgeniiaAbdulina)