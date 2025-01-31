# History

### [Upcoming]
+ @media query fixes for hovers
+ expand Style Settings support
+ cleanup ./scss/base/_ctp-style-setting.scss
+ update ./scss/base/_app-variables.scss with any changes to app.css
+ rewrite theme

## [0.4.42] - 2025-1-31
### Fixes
+ Issue 110 identified a problem with the pdf viewer css after an Obsidian update, then provided the solution. Thanks Andrea!

## [0.4.41] - 2025-1-16
### Adds
+ Implements request in #108 for clearer indication of active date in Calendar plugin
### Fixes
+ Removes extraneous semicolon from _checklists.scss


## [0.4.40] - 2024-12-4
### Fixes
+ Fixes #97, where highlights applied to links had poor contrast
+ Fixed a text selection issue where ctp-rosewater was being incorrectly applied to highlighted text. It should now be ctp-overlay2/30%

## [0.4.39] - 2024-11-25
### Adds
+ Adds requested Minimal theme checklist items. Thanks, Kepano! <3

## [0.4.38] - 2024-11-13
### Fixes
+ Fixes issue raised in #73, where linked mentions did not take on the right color when hovered

## [0.4.37] - 2024-11-12
### Fixes
+ Corrects an issue identified in #73 that resulted in poor color contrast when using Mermaid mindmaps

## [0.4.35] - 2024-10-22
### Fixes
+ Changed some wording and formatting in CONTRIBUTING.md to hopefully make the building process clearer

## [0.4.34] - 2024-10-22
### Fixes
+ theme.css was missing after merging PRs, breaking repo, should be back now

## [0.4.33] - 2024-10-22
### Adds
+ PRs #68 and #68

## [0.4.32] - 2024-9-30
### Adds
+ Initial compatibility for Folder Notes plugin, see issue #67

## [0.4.29] - 2024-9-20
### Adds
+ Users can now use Style Settings to revert to default tag appearance (pill-shaped) and/or adjust tag text color

## [0.4.28] - 2024-9-20
### Adds
+ Clarify what belongs to Catppuccin in Style Settings

## [0.4.27] - 2024-9-9
### Fixes
+ Improve wording in Style Settings PDF section

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
