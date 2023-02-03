# Contributing

Contributions are always appreciated, especially if you want to use your contribution as an opportunity to learn more about git, CSS, Obsidian, etc. or expand the theme for a plugin you use. Expanding the theme's integration with Style Settings is also welcome. This is an inclusive project, and you can contribute (without judgment!) regardless of skill level. Before contributing, please take a moment to read the below information regarding the theme's structure and color usage (but don't worry about perfection; we can always nail things down in review). If you are unsure how to contribute after reading the section below, open an issue and we can talk through it. 🤙

### Theme layout and colors

The theme file structure is loosely based on the [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern). It's written largely in plain CSS, but contained in SCSS files. If you are not familiar with SCSS, please see [sass-lang.com](https://sass-lang.com/).[^development] The repository includes a `.stylelintrc.yml` file if you care to use [Stylelint](https://stylelint.io/).

There are two files that might be helpful to investigate before contributing: [_app-variables.scss](https://github.com/catppuccin/obsidian/blob/main/scss/base/_app-variables.scss) and [_ctp-style-settings.scss](https://github.com/catppuccin/obsidian/blob/main/scss/base/_ctp-style-settings.scss).

`_app-variables.scss` contains variables from Obsidian's CSS, some of which have been customized for Catppuccin. You can rely on these variables as references, but it is generally best to leave this file untouched. However, it can sometimes make sense to change variables inside specific selectors. For example:

 ```scss
 .some-guy {
  --h1-color: rgb(var(--ctp-accent));

  color: var(--h1-color);
 }
 ```

`_ctp-style-settings.scss` defines the Catppuccin colors for the theme. This file provides the names of the colors being used elsewhere in the theme. Color usage unique to the default user experience can be found in [_full-palette.scss](https://github.com/catppuccin/obsidian/blob/main/scss/themes/_full-palette.scss).

### What colors go where?

Obsidian has a few selectors to keep in mind when modifying its CSS. Three of the more important ones: `.is-selected`, `.is-active`, and `:hover`.

The full palette aims to use colors in the following ways:
+ `.is-active`
  + `var(--ctp-mauve)` is used for active files in the file explorer sidebar, the active page in the settings sidebar, and so on
  + `var(--ctp-pink)` is used for active button icons
  + An inset box-shadow is used for many active items, such as buttons or the file type label for items in the file explorer sidebar, indicating they have been "pressed down":
    ```scss
    .workspace-tab-header.is-active {
      box-shadow:
      inset 0 0 4px rgb(var(--ctp-crust)), 
      inset 0 0 6px rgb(var(--ctp-base));
    }
    ```
  + Items in this category will often need their `color` changed from something like `var(--text-normal)` to `var(--text-on-accent)`
+ `.is-selected`
  + `var(--ctp-accent)` is used when items in the command palette are selected, when items in the search results sidebar are selected, and so on
  + Items in this category will often need their `color` changed from something like `var(--text-normal)` to `var(--text-on-accent)`
+ `:hover`
  + `var(--ctp-accent)` is used when hovering over the file explorer sidebar, settings sidebar, and most other "UI links"
  + `var(--ctp-pink)` is used when hovering over buttons and other "interactive" UI elements
  + Hovering over highlighted text should usually cause the highlighted color to become somewhat transparent (e.g. `(rgb(var(--ctp-rosewater), 60%))` for highlighted search results).
  + Hovering over an item should cause either some part of it to get brighter or its text to become underlined
  + Items in this category will often need their `color` changed from something like `var(--text-normal)` to `var(--text-on-accent)`

When transitioning from a default state to one of the above states, the relevant transition from [_animations.scss](https://github.com/catppuccin/obsidian/blob/main/scss/components/_animations.scss) is often applied. For example:
```scss
.a-guy {
  color: var(--text-normal);
  transition: var(--transition-hover-color);

  &:hover {
    color: rgb(var(--ctp-accent));
  }
}
```


### CSS for plugins

If you are contributing plugin-related CSS, `./scss/vendors/_plugins` is where to go to make changes/additions. Add a comment indicating the name of the plugin you're adding CSS for and write your CSS below the comment. If you are adding CSS to a plugin already named in the file, just include your CSS at the bottom of that plugin's section.

[^development]: If you're new to all of this, here's one way to work on the theme: Go to the linked SASS docs above and follow the instructions to install it. In Obsidian, turn off any snippets or theme currently in use. Create a snippet in your Obsidian vault's `.obsidian/snippets` folder called, say, `catppuccin.css`. Turn this snippet on. Fork the Catppuccin Obsidian repository (for more the GitHub part of this, see [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests) and/or [here](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/)).

    From your terminal, `cd` to the repository and run: `sass scss/main.scss obsidianvaultlocation/.obsidian/snippets/catppuccin.css --watch`. Changes you make will now be updated when the file you are working on is saved. Make liberal use of the development tools in Obsidian (`cmd+opt+i` or `ctrl+shift+i`).

    When you are done with your changes, run: `sass scss/main.css theme.css` and, if you don't mind, update the `manifest.json` file by 0.0.1 (e.g. from `0.1.0` to `0.1.1`). Then, begin the pull request process (see [this link](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests) and/or [this link](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/) again). 
