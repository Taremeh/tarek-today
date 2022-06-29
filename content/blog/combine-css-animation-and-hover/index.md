---
title: "Combine CSS Animation and :Hover"
date: "2022-06-16T20:00:00.000Z"
description: "Do you have trouble combining a CSS animation with CSS :hover effects that use CSS transitions? Either the animation works or the hover effect, or maybe even both, but then the transition fails when hovering. Here is the solution..."
tags: ["coding"]
---

Do you have trouble combining a **CSS animation** with **CSS :hover** effects that use **CSS transitions**? Either the animation works or the hover effect, or maybe even both, but then the transition fails when hovering...

This is the fully working solution I came up with (supporting a custom CSS Animation, while supporting hover animations with a CSS Transition):

<video width="100%" autoplay loop muted>
    <source src="./tarek-today-nav-final.mp4" type="video/mp4" />
</video>

```css
a {
    animation-name: colorPulse;
    animation-duration: .6s;
    transition: all .2s;
    background-color: var(--background-color);

    @keyframes colorPulse {
      0% {background-color: var(--background-color);}
      50% {background-color:  var(--background-color-active);}
      100% {background-color: var(--background-color);}
    }

    &:nth-of-type(1){
      --background-color-active: #f2a7b57b;
      &:hover {
        background-color: var(--background-active);
        color: black;
      }
    }
```

This solution even supports having an active link state (using ReactJS or GatsbyJS) while still correctly showing the CSS animations and hover transitions: 

```css
a {
    /* ... */

    &:nth-of-type(2) {
        animation-delay: .3s;
        --background-color-active: #01403A7b;
        /* set default background-color to active color already 
        (implies no visible effect on animation since 
        background-color already is background-color-active). 
        This way we prevent animation flickering of any sort.
        
        e.g. having the colorPulse animation going from 
        transparent color to active color back to transparent 
        color would be intuitive. However this would mean that 
        we quickly override the active color with 2 short 
        transparent phases. 
        
        Solutions that involove "animation-fill-mode: forward" 
        will make hover transitions impossible since you are 
        stuck in the animation. */
        --background-color: ${location.pathname === 
        ("/currentPage" ? 
        "var(--background-color-active)" : 
        "transparent")};

        &:hover {
          background-color: var(--background-color-active);
          color: black;
        }
    }
}
```
