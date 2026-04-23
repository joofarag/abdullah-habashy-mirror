# Abdullah Habashy Website Clone

A static clone of [abdullah-habashy.com](https://abdullah-habashy.com/) - an Arabic educational website for Dr. Abdullah Habashy, a chemistry teacher.

## Structure

```
├── index.html              # Main page
├── css/
│   └── styled-components.css  # Component styles
├── fonts/                  # Custom Arabic fonts (OMNES Arabic, BackToSchool)
├── images/                 # Images, icons, and SVGs
└── media/
    ├── bg-light.svg        # Light theme background
    ├── bg-dark.svg         # Dark theme background
    └── svg/                # SVG assets (footer, section backgrounds)
```

## Running Locally

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx serve .
```

Then open `http://localhost:8080` in your browser.

## Features

- RTL (Right-to-Left) Arabic layout
- Responsive design (mobile, tablet, desktop)
- Light/dark theme support
- Hero section with animated elements
- Course cards grid
- Footer with social media links
