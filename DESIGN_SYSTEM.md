# Design System (v1)

This document defines the initial typography, color, and layout rules for the project.

## Breakpoints

- `lg`: 1280px and up
- `md`: below 1280px

## Colors

- Primary background (all sections): `#FFFFFF`
- Text color: `#000000`
- Footer + CTA surface: `#D7EFDD`

## Layout Frame

- Reference width: `1920px`
- Reference height: `1254px`
- Angle: `0deg`
- Opacity: `1`

Use `.ds-layout` for sections that should follow this frame.

## Navbar (LG)

- Width: `1920px` reference (`.ds-navbar-wrap` uses responsive `min(100%, 1920px)`)
- Height: `100px`
- Angle: `0deg`
- Opacity: `1`
- Background: light neutral (`--navbar-bg`)

Navigation text style for lg:

- Logo: `public/logo.png` image asset
- Links: `.ds-navbar-link`
  - Font: Satoshi
  - Weight: 500 (Medium)
  - Size: 18px
  - Line-height: 24px
  - Align: center

## Hero (LG)

- Assets path: `public/assets/herosection`
- Heading uses `h1` with local Gerbil font from `public/assets/gerbil.otf`
- Paragraph style:
  - Font: Satoshi
  - Weight: 400 (Regular)
  - Size: 24px
  - Line-height: 36px
  - Letter spacing: 0%
  - Align: center

## Typography Tokens

### LG

| Token | Font Family | Weight |  Size | Line Height | Letter Spacing | Align   |
| ----- | ----------- | -----: | ----: | ----------: | -------------: | ------- |
| h1    | Gerbil      |    400 | 100px |       126px |             0% | center  |
| h2    | Gerbil      |    400 | 100px |       116px |             0% | inherit |
| h3    | Gerbil      |    400 |  56px |        76px |             0% | inherit |
| p1    | Satoshi     |    400 |  24px |        36px |             0% | center  |
| p2    | Gerbil      |    400 | 100px |       116px |             0% | inherit |
| p3    | Satoshi     |    500 |  20px |        24px |             0% | inherit |
| p4    | Satoshi     |    400 |  18px |        30px |             0% | center  |

### MD

The `md` scale keeps hierarchy while improving readability on medium screens.

| Token | Size | Line Height |
| ----- | ---: | ----------: |
| h1    | 72px |        90px |
| h2    | 72px |        84px |
| h3    | 42px |        58px |
| p1    | 20px |        30px |
| p2    | 72px |        84px |
| p3    | 18px |        24px |
| p4    | 16px |        26px |

## Utility Class Mapping

- `.ds-h1` -> h1 token
- `.ds-h2` -> h2 token
- `.ds-h3` -> h3 token
- `.ds-p1` -> p1 token
- `.ds-p2` -> p2 token
- `.ds-p3` -> p3 token
- `.ds-p4` -> p4 token
- `.ds-surface-cta-footer` -> footer/CTA background color

## Font Source Notes

`Gerbil` and `Satoshi` are configured as font-family names in global CSS.
To use the exact brand typefaces, add the font files (or webfont import) and wire them to these names.
