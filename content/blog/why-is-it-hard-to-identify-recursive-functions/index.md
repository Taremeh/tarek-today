---
title: "Why is it so hard to identify recursive functions?"
date: "2022-06-22T20:00:00.000Z"
description: "Hello World"
tags: ["coding"]
---

Why is it so hard for a program to identify recursive functions? Humans, including non-programmers (!), can easily spot a recursive function. Look at the following example:

```python
def count_to_zero(num: int):
    if num < 0:
        return
    print("f{num}")
    return count_to_zero(num-1)
```

Is this a recursive function?

Yes! Because in the return statement of the function `count_to_zero`, the function calls itself. Therefore, it is a recursive function. 

So why is it so hard to for a script to determine whether a module contains a recursive function as seen in the example? There is actually an easy way, if you're only dealing with well functioning Python modules. Here is the code to determine if a function is recursive:

## Check whether function is recursive with 1 line of code

```python
def is_function_recursive(function: Callable):
    return function.__name__ in function.__code__.co_names
```

This boolean check evaluates to `True` if the function name is called in its function body.

`__code__.co_names` is a _[tuple of names other than arguments and function locals](https://docs.python.org/3/library/inspect.html#types-and-members)_, which would include the function name in the tuple, if the function is recursive.

So why am I complaining if you only require one line of code to determine whether a function is recursive? Well, this is only the case if you're code is functioning. Then you can exploit these built-in functions and attributes Python provides you. However, assume you've only got a code snippet which import many unknown or missing modules, or has unfixable bugs, or has undefined variables. Furthermore, assume you want to analyze a big corpus (10'000 files or more) of such non-functioning code snippets.

For a big corpus you would want to dynamically import the code snippets and use the `is_function_recursive` function to check whether a code snippet contains recursive calls. Unfortunately, your imports would fail because Python executes all your imported code and you can't do anything about it. Encapsulating all the code into a `if __name__ == '__main__'` clause would prevent the execution of the imported code, however, you would also lose the ability to import the classes and functions contained in the `if` body.

