# chandratand/ui

The shared design system for every chandratand project, distributed as a copy-paste registry that consumer apps install from and then own.

## Distribution

**Registry**:
The published catalogue of installable items that make up chandratand/ui.
_Avoid_: package, library

**Consumer app**:
A chandratand project that installs items from the Registry and owns the copied code.
_Avoid_: client, host app, project

**Changelog**:
The dated record of what changed per item, telling a Consumer app when to re-pull with overwrite.
_Avoid_: release notes

## Items

**Tokens**:
The set of named design values (colour, type, spacing, radius, motion) every other item is built on.
_Avoid_: theme, variables

**Component**:
A single reusable UI element shipped by the Registry, styled only through semantic Tokens.
_Avoid_: widget, primitive

**Block**:
A ready-made composition of Components that solves one recurring screen pattern, such as a login form or app shell.
_Avoid_: template, pattern, section

**Style**:
The one item that installs Tokens and every Component in a single step; it does not include Blocks.
_Avoid_: bundle, preset, kit

## Theming

**Mode**:
The light or dark appearance, independent of Brand.
_Avoid_: theme, color scheme

**Brand**:
A named visual identity that overrides semantic Tokens only; chandratand is the default, and Components never know which Brand is active.
_Avoid_: theme, skin
