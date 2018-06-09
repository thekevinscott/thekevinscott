# Essays & Writing
By Kevin Scott

# Writing
All posts should live within src. Use the convention date-title.

# Deploying

```
yarn build
yarn deploy
```

This will build the repo, and copy it over to `gh-pages` which is the branch that Github Pages serves the site on.

# Creating a new post

```
yarn new 2016/my-new-post
```

Running `yarn new` with the path to your post (on disk) will automatically set up the folder structure for a new post. It will create an `index.md` file with the correct front matter, including:

* a path that matches the argument after the last slash (the URL)
* a title corresponding to that URL argument turned into human readable
* today's date

It will also set up an integration test that ensures the page renders

# Markdown
There's a few custom components

## `<script src=""></script>`
This does embeds and it will automatically parse the src attribute appropriately. Only Github gists are currently supported

## `<capt>Foo</capt>`

Inserts an image caption

## `<form></form>`

Inserts an inline form
