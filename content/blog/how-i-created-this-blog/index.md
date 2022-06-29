---
title: "How I have created this blog"
date: "2022-06-28T20:00:00.000Z"
description: "Why is it so hard for a program to identify recursive functions? Let's find a solution to detect recursive functions without the need of executing them on import."
tags: ["coding"]
---

I have created this blog - [tarek.today](https://tarek.today) - using ReactJS and GatsbyJS.

## ReactJS + GatsbyJS as framework basis

## Typescript for ReactJS (TSX) as the programming language

## GatsbyJS starter & plugins

- Official [GatsbyJS Starter Blog](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog) as the skeleton for the blog.
- [gatsby-remark-katex](https://www.gatsbyjs.com/plugins/gatsby-remark-katex) plugin to support mathematical notation in blog posts.
- [gatsby-remark-autolink-headers](https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/) plugin to add the ability to link to specific sections of blog posts. The plugin automatically creates html id links and displays an anchor icon next to the headings of the blog posts.
- [gatsby-remark-image-attributes](https://github.com/rbeer/gatsby-remark-image-attributes) to enable image attributes in markdown.
- Furthermore I've manually added support for tags / categories. GatsbyJS provides an official tutorial on [how to create tag pages for blog posts](https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/).