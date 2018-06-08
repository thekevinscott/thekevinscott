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

# Markdown
There's a few custom components

## `<script src=""></script>`
This does embeds and it will automatically parse the src attribute appropriately. Only Github gists are currently supported

## `<capt>Foo</capt>`

Inserts an image caption

## `<form></form>`

Inserts an inline form
