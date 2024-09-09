# History

### [Upcoming]
+ @media query fixes for hovers
+ expand Style Settings support
+ cleanup ./scss/base/_ctp-style-setting.scss
+ update ./scss/base/_app-variables.scss with any changes to app.css
+ rewrite theme

## [0.4.27] - 2023-9-9
### Fixes
- Improve wording in Style Settings PDF section

## [0.4.17] - 2023-8-14
### Adds
+ Transition effects now exist on button/dropdown hovers

### Fixes
+ Improve light theme's dragging tooltip background color

## [0.4.14] - 2023-6-22
### Fixes
+ incorrect rgb colors in certain parts of the _ctp-style-settings.scss file. They may have always been a little bit off -- I can't find a record in the main palette's commit history that explains where they came from, but they appear to have been part of this theme since its Catppuccin 2.0 launch. My guess is they are a relic of the sass mapping process their creator used, but I have no memory of why we/he/I chose that route.
+ incorrect transition speeds on inactive tabs. Maybe.

## [0.4.10] - 2023-5-15
### Adds
+ more of the default app variables Obsidian devs have included at the top of `app.css` since I last checked

### Fixes
+ some padding issues that would have broken the theme when Obsidian 1.3 ships

## [0.4.9] - 2023-05-11

### Fixes
+ incorrect colors shown when hovering and selecting items in the new bookmarks sidebar

## [0.4.7] - 2023-04-19

### Adds
+ note to plugins section of README.md about MAKE.md compatibility

### Fixes
+ various hover, active, and selection issues with the make.md plugin in _plugins.scss

## [0.4.6] - 2023-04-18

### Adds
+ initial compatibility for MAKE.md plugin
+ Style Settings config for file name color

### Changes
+ font stack css — _typography.scss

## [0.4.5] - 2023-02-24

### Adds
+ HISTORY.md file
+ tooltip background color, border, and font color
+ credits for and info about the Vollkorn font encoded in the theme
+ a hover effect to items on a blank page (e.g. "Create a new file")

### Changes
+ settings in .stylelintrc.yml

### Fixes
+ inconsistent transitions when hovering over icons
+ weird hover effect on folder/file titles when double-clicking a folder title in the header area over an open file (this only brings it about up to par with the default theme, where a similarly odd effect also happens)


Attempts to follow [semantic versioning](https://semver.org)
[keepachangelog.com](https://keepachangelog.com)
