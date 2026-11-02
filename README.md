# Random Password Generator

A simple password generator built with HTML, CSS and vanilla JavaScript. Choose a length, click a button, and get two random passwords. Click either one to copy it to your clipboard.

## Features

- Generates two random passwords at once
- Adjustable length (default 15 characters)
- Uses uppercase, lowercase, numbers and symbols
- Click a password to copy it to the clipboard
## Project Structure

```
├── index.html      # Page markup
├── index.css       # Styling
├── index.js        # Password generation and copy logic
├── package.json    # Vite scripts (optional)
└── vite.config.js  # Vite config (optional)
```

## Getting Started

### Option 1: Open directly

No installation needed. Open `index.html` in your browser.

### Option 2: Run with Vite

Requires [Node.js](https://nodejs.org/) 20.19+ or 22.12+.

```
npm install
npm start
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

> If you moved the project between operating systems, delete the `node_modules` folder before running `npm install`, as it contains platform-specific binaries.

## Usage

1. Enter the number of characters you want (up to 20).
2. Click **Generate Password**.
3. Click a password to copy it.
## How It Works

`index.js` holds an array of letters, digits and symbols. For each position in the password, it picks a random character with `Math.random()` and joins the results into a string.
