---
path: "/arrays-in-react-16/"
date: "2017-09-26T09:00:00.000Z"
title: "Arrays in React 16 and the necessity of keys"
image: "cover.jpeg"
tags: ["react", "react 16"]
---

Over the weekend at [React Boston](http://www.reactboston.com/) [I saw a great
talk](http://www.benmvp.com/slides/2017/reactboston/fiber.html#/) by [Ben
Ilegbodu](https://medium.com/@benmvp) where he discussed changes in the
[upcoming Fiber release](https://github.com/acdlite/react-fiber-architecture)
for React 16.

A common complaint in React 15 and below has been the inability to directly
return an array of elements. React traditionally has required render functions
to return a single top-level parent element. This means that when returning
lists, you'd have to enclose the list in a container element:

    // Valid React 15
    const Page = () => (
      <div>
        <a href="#one">One</a>
        <a href="#two">Two</a>
      </div>
    );

This often leads to extraneous markup with `div`s that pollute the HTML. In
React 16, you can return arrays of elements:

    // Valid React 16, invalid React 15
    const Page = () => ([
      <a key="one" href="#one">One</a>
      <a key="two" href="#two">Two</a>
    ]);

You'll notice each element has a unique `key`. From the React docs:

> Keys help React identify which items have changed, are added, or are removed.
> Keys should be given to the elements inside the array to give the elements a
stable identity — [Lists and
Keys](https://facebook.github.io/react/docs/lists-and-keys.html#keys)

In practice, unique keys might look something like this:

    // where href is guaranteed to be unique
    const Header = ({ links }) => (
      <div>
        {links.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
    );

https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318

Returning unique `key`s from the render method helps React identify what needs
to be re-rendered. But it also adds some verbosity to the code that feels
redundant; for instance, we don't need to add keys when returning top-level
elements.

In his talk, [Ben](https://medium.com/@benmvp) highlighted a library,
[react-aux](https://github.com/gajus/react-aux), that addresses this verbosity
problem and removes the need to provide explicit keys:

    const Root = () => {
      return <Aux>
        <p>Hello, World!</p>
        <p>I am a demo for react-aux.</p>
      </Aux>;
    };

    // which is equivalent to the following:
    const Root = () => {
      const Aux = (props) => props.children;

      return <Aux>
        <p>Hello, World!</p>
        <p>I am a demo for react-aux.</p>
      </Aux>;
    };

[Gajus Kuizinas](https://medium.com/@gajus)'s package leverages the fact that
you can omit unique keys for a list of elements by directly returning `children`
from a container div.

But that makes me question: **Why is it valid to return children without keys,
but invalid to return a top level array without keys? **I suspect the answer has
something to do with providing a top-level node for the children to live under.
But why do nested siblings in a regular `render` function not require keys as
well?

If you know the answer, please leave a comment! I'm hoping to dig more into
React 16 and see if I can answer this myself.

*****

*Edit (9/29/2017):* Looks like the team is thinking about addressing this in the
future:

> In the future, we'll likely add a special fragment syntax to JSX that doesn't
> require keys. — [Andrew
Clark](https://reactjs.org/blog/2017/09/26/react-v16.0.html)

So there you have it!
