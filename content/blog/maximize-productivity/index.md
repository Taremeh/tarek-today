---
title: "Maximize Productivity: A Tool Collection"
date: "2022-06-30T20:00:00.000Z"
description: "Why is it so hard for a program to identify recursive functions? Let's find a solution to detect recursive functions without the need of executing them on import."
tags: ["productivity"]
---

Use this tools to maximize your productivity in a variety of areas: coding, writing, general workflow, image processing and more.


## Content Creation

I am creating content on mass: I document everything I do (either in writing or as video). To keep the quality to a high standard, I need to leverage high productivity and efficency, such that I loose as little time as possible doing the actual task.

$$
T(r) \quad \approx \quad T(r) + T(c) - T(i) \\[2em]

r \coloneqq \text{regular work} \\[.25em]
c \coloneqq \text{content creation overhead} \\[.25em]
i \coloneqq \text{increased efficency} \\[1em]

T(t: task) \coloneqq \text{time consumption} 
$$

### Writing

- [KaTeX Symbol List](https://katex.org/docs/supported.html) for quick math symbol reference when writing markdown.
- [Paste Image](https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image) plugin for VS Code when writing markdown. Allows me to insert a clipboard screenshot directly into markdown files via paste shortcut.

### Image Processing

- [ImageMagick](https://imagemagick.org/) to combine two screenshots into one using:
    - `convert +append a.png b.png out.png` to merge horizontally
    - `convert -append a.png b.png out.png` to merge vertically



## Coding

## Writing


## General Workflow
- Knowing your OS and Chrome keyboard shortcuts.
    - Chrome
        - `cmd + t` to open a new tab
        - `cmd + w` to close a tab
    - MacOS
        - `cmd + spacebar` to open Spotlight
        - `option + spacebar` to open Raycast (see below)
    - Visual Studio Code (VS Code)
        - `cmd + click` on links in text, to instantly open the link instead of copy-pasting. 
- [Raycast](https://www.raycast.com/) as an improved spotlight for MacOS. Using custom script shortcuts. E.g. "Terminal @ Screenshot Dir" opens a new terminal in my screenshot directory, such that I can quickly operate on screenshots.